import { useState, ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { couponStatusSelectMenu, issuedCouponInfoSelectMenu } from "@/constants/coupon";
import {
  useIssuedCouponDispatchContext,
  useIssuedCouponStateContext,
} from "@/hooks/contexts/useIssuedCouponContext";

export default function IssuedCouponHeader() {
  const [selectedCouponInfo, setSelectedCouponInfo] = useState({
    variant: 1,
    text: 1,
  });

  const { setSearchInfo, setPaginationModel } = useIssuedCouponDispatchContext();
  const {
    searchInfo: { text: searchText },
  } = useIssuedCouponStateContext();

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectCouponInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      variant: issuedCouponInfoSelectMenu[targetIndex]["type"],
      text: targetIndex === 4 || targetIndex === 5 ? "true" : "",
    }));
    setSelectedCouponInfo(prevSelectedCouponInfo => ({
      ...prevSelectedCouponInfo,
      variant: targetIndex + 1,
      text: targetIndex === 4 || targetIndex === 5 ? 1 : 0,
    }));
    handleResetPage();
  };

  const handleChangeSelectCouponStatus = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      text: couponStatusSelectMenu[targetIndex]["type"],
    }));
    setSelectedCouponInfo(prevSelectedCouponInfo => ({
      ...prevSelectedCouponInfo,
      text: targetIndex + 1,
    }));
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.length === 1 && handleResetPage();

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      text,
    }));
  };

  return (
    <StyledHeaderWrapper>
      <StyledFormWrapper>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={selectedCouponInfo.variant}
          onChange={handleChangeSelectCouponInfoVariant}
        >
          {issuedCouponInfoSelectMenu.map(menu => (
            <MenuItem value={menu.value} key={menu.value}>
              {menu.name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormWrapper>
      {selectedCouponInfo.variant === 5 || selectedCouponInfo.variant === 6 ? (
        <StyledFormWrapper>
          <InputLabel>Status</InputLabel>
          <Select
            label="Type"
            value={selectedCouponInfo.text}
            onChange={handleChangeSelectCouponStatus}
          >
            {couponStatusSelectMenu.map(menu => (
              <MenuItem value={menu.value} key={menu.value}>
                {menu.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormWrapper>
      ) : (
        <StyledTextField
          label="search"
          variant="outlined"
          placeholder="name, email, etc.."
          value={searchText}
          onChange={handleChangeText}
        />
      )}
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  flexWrap: "wrap",
  padding: "16px",
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});
