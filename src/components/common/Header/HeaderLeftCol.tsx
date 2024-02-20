import { allMemberTableTitle, paymentStatusTableSelectOptionList } from "@constants/table";
import { ManagementVariant } from "@types/entities/member";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack } from "@mui/material";
import styled from "@emotion/styled";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

const HeaderLeftElement = {
  allMember: (
    <FormContainer>
      <InputLabel>Type</InputLabel>
      <Select>
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
};

export default function HeaderLeftCol({ variant }: HeaderLeftColProps) {
  const textFieldWidth = variant === "pendingMember" ? 300 : 200;

  return (
    <Container>
      {HeaderLeftElement[variant]}
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: textFieldWidth }}
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
