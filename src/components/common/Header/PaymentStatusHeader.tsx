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

import { memberInfoSelectMenu } from "@/constants/member";
import {
  usePaymentStatusSearchInfoDispatch,
  usePaymentStatusSearchInfoState,
} from "@/hooks/contexts/usePaymentStatusSearchInfoContext";

export default function PaymentStatusHeader() {
  const [selectedMemberInfoVariant, setSelectedMemberInfoVariant] = useState<number>(1);

  const { setSearchText, setSearchVariant, setPaginationModel } =
    usePaymentStatusSearchInfoDispatch();
  const { searchText } = usePaymentStatusSearchInfoState();

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectMemberInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchVariant?.(memberInfoSelectMenu[targetIndex]["type"]);
    setSearchText?.("");
    setSelectedMemberInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.length === 1 && handleResetPage();

    setSearchText?.(text);
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
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
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});
