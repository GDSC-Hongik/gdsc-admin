import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import {
  InputLabel,
  Select,
  MenuItem,
  Stack,
  FormControl,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { paymentInfoSelectMenu } from "@/constants/paymentStatus";
import {
  usePaymentStatusDispatchContext,
  usePaymentStatusStateContext,
} from "@/hooks/contexts/usePaymentStatusContext";
import { SearchInfoType } from "@/types/entities/payment";

export default function PaymentStatusHeader() {
  const [selectedSearchInfoVariant, setSelectedSearchInfoVariant] = useState<number>(1);

  const { setSearchInfo, setPaginationModel } = usePaymentStatusDispatchContext();
  const {
    searchInfo: { text: searchText },
  } = usePaymentStatusStateContext();

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectSearchInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(
      prevSearchInfo =>
        ({
          ...prevSearchInfo,
          variant: paymentInfoSelectMenu[targetIndex]["type"],
          text: "",
        }) as SearchInfoType,
    );
    setSelectedSearchInfoVariant(targetIndex + 1);
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

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={selectedSearchInfoVariant}
            onChange={handleChangeSelectSearchInfoVariant}
          >
            {paymentInfoSelectMenu.map(title => (
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
      </StyledHeaderLeftColWrapper>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledHeaderLeftColWrapper = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const StyledFormWrapper = styled(FormControl)({
  width: "220px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});
