import { allMemberTableTitle, paymentStatusTableSelectOptionList } from "@constants/table";
import { ManagementVariant } from "@types/entities/member";
import { HeaderProps } from ".";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  setAllMemberSearchType: HeaderProps<T>["setAllMemberSearchType"];
  setAllMemberSearchText: HeaderProps<T>["setAllMemberSearchText"];
};

const HeaderLeftElement = (setAllMemberSearchType: Dispatch<SetStateAction<string>>) => ({
  allMember: (
    <FormContainer>
      <InputLabel>Type</InputLabel>
      <Select
        onChange={e =>
          setAllMemberSearchType(allMemberTableTitle[(e.target.value as number) - 1]["type"])
        }
      >
        {allMemberTableTitle.map(title => (
          <MenuItem value={title.value}>{title.name}</MenuItem>
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
          <MenuItem value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormContainer>
  ),
});

export default function HeaderLeftCol<T extends ManagementVariant>({
  variant,
  setAllMemberSearchType,
  setAllMemberSearchText,
}: HeaderLeftColProps<T>) {
  const textFieldWidth = variant === "pendingMember" ? 300 : 200;

  return (
    <Container>
      {HeaderLeftElement(setAllMemberSearchType!)[variant]}
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: textFieldWidth }}
        onChange={e => {
          if (variant === "allMember") {
            setAllMemberSearchText?.(e.target.value);
          }
        }}
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
