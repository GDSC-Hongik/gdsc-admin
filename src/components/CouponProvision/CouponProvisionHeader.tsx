import { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { memberInfoSelectMenu } from "@/constants/member";
import {
  useCouponProvisionDispatchContext,
  useCouponProvisionStateContext,
} from "@/hooks/contexts/useCouponProvisionContext";
import useGetCouponListQuery from "@/hooks/queries/useGetCouponListQuery";
import { CouponListResponseDtoType } from "@/types/dtos/coupon";

export default function CouponProvisionHeader() {
  const [selectedMemberInfoVariant, setSelectedMemberInfoVariant] = useState(1);

  const couponList = useGetCouponListQuery();

  const { setSearchInfo, setPaginationModel, setSelectedCouponId, setProvisionModalOpen } =
    useCouponProvisionDispatchContext();
  const {
    searchInfo: { text: searchText },
    selectedCouponId,
  } = useCouponProvisionStateContext();

  const getFilteredCouponList = (couponList: CouponListResponseDtoType) => {
    const newCouponList: string[] = [];

    return couponList.filter(coupon => {
      if (newCouponList.includes(coupon.name)) {
        return false;
      } else {
        newCouponList.push(coupon.name);
        return true;
      }
    });
  };

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectMemberInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      variant: memberInfoSelectMenu[targetIndex]["type"],
      text: "",
    }));
    setSelectedMemberInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length === 1) {
      handleResetPage();
    }

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      text,
    }));
  };

  const handleChangeSelectedCoupon = (e: SelectChangeEvent<unknown>) => {
    setSelectedCouponId(e.target.value as number);
  };

  const handleClickCouponProvision = () => {
    setProvisionModalOpen(true);
  };

  return (
    <StyledHeaderWrapper>
      <StyledLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={selectedMemberInfoVariant}
            onChange={handleChangeSelectMemberInfoVariant}
          >
            {memberInfoSelectMenu.map(title => (
              <MenuItem value={title.value} key={title.value}>
                {title.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormWrapper>
        <StyledTextField
          label="search"
          variant="outlined"
          placeholder="name, email, etc.."
          value={searchText}
          onChange={handleChangeText}
        />
      </StyledLeftColWrapper>
      <StyledRightColWrapper>
        <StyledFormWrapper couponform={1}>
          <InputLabel>쿠폰 선택</InputLabel>
          <StyledSelect
            label="쿠폰 선택"
            value={selectedCouponId || ""}
            onChange={handleChangeSelectedCoupon}
          >
            {getFilteredCouponList(couponList).map(coupon => (
              <MenuItem value={coupon.couponId} key={coupon.couponId}>
                {coupon.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormWrapper>
        <StyledButton variant="contained" onClick={handleClickCouponProvision}>
          쿠폰 지급
        </StyledButton>
      </StyledRightColWrapper>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  flexWrap: "wrap",
  padding: "16px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledLeftColWrapper = styled(Box)({ display: "flex", gap: 10 });

const StyledRightColWrapper = styled(Box)({ display: "flex", gap: 16, alignItems: "center" });

const StyledFormWrapper = styled(FormControl)<{ couponform?: number }>(({ couponform = 0 }) => ({
  width: couponform ? "170px" : "180px",
}));

const StyledTextField = styled(TextField)({
  width: 200,
});

const StyledButton = styled(Button)({
  padding: "6px 16px",
  height: "36px",
});

const StyledSelect = styled(Select)({
  padding: "16px",
  height: "56px",
});
