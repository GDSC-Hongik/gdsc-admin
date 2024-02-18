import { allMemberTableTitle } from "@constants/table";
import { ManagementVariant } from "@types/entities/member";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack } from "@mui/material";
import styled from "@emotion/styled";

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

export default function HeaderLeftCol({ variant }: HeaderLeftColProps) {
  const textFieldWidth = variant === "allMember" ? 180 : 300;

  return (
    <Container>
      {variant === "allMember" && (
        <FormContainer>
          <InputLabel>Type</InputLabel>
          <Select>
            {allMemberTableTitle.map(title => (
              <MenuItem value={title.value}>{title.name}</MenuItem>
            ))}
          </Select>
        </FormContainer>
      )}
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

const FormContainer = styled(FormControl)({
  width: "180px",
});
