import { HeaderProps } from ".";
import { allMemberTableTitle, paymentStatusTableSelectOptionList } from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import styled from "@emotion/styled";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  setAllMemberSearchType: HeaderProps<T>["setAllMemberSearchType"];
  setAllMemberSearchText: HeaderProps<T>["setAllMemberSearchText"];
};

const HeaderLeftElement = (setAllMemberSearchType: Dispatch<SetStateAction<string>>) => {
  const handleChangeAllMemberSelect = (e: SelectChangeEvent<unknown>) =>
    setAllMemberSearchType(allMemberTableTitle[(e.target.value as number) - 1]["type"]);

  return {
    allMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select onChange={handleChangeAllMemberSelect}>
          {allMemberTableTitle.map(title => (
            <MenuItem value={title.value} key={title.value}>
              {title.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
    pendingMember: null,
    paymentStatus: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select>
          {paymentStatusTableSelectOptionList.map(option => (
            <MenuItem value={option.value} key={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
  };
};

export default function HeaderLeftCol<T extends ManagementVariant>({
  variant,
  setAllMemberSearchType,
  setAllMemberSearchText,
}: HeaderLeftColProps<T>) {
  const textFieldWidth = variant === "pendingMember" ? 300 : 200;
  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (variant === "allMember") {
      setAllMemberSearchText?.(e.target.value);
    }
  };

  return (
    <Container>
      {HeaderLeftElement(setAllMemberSearchType!)[variant]}
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: textFieldWidth }}
        onChange={handleChangeText}
      />
    </Container>
  );
}

const Container = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});
