import { allMemberTableTitle } from "@constants/table";
import { ManagementVariant } from "@types/member";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack, styled } from "@mui/material";

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

export default function HeaderLeftCol({ variant }: HeaderLeftColProps) {
  const textFieldWidth = variant === "allMember" ? "180px" : "300px";

  return (
    <Container>
      {variant === "allMember" && (
        <FormControl sx={{ width: "180px" }}>
          <InputLabel>Type</InputLabel>
          <Select>
            {allMemberTableTitle.map(title => (
              <MenuItem value={title.value}>{title.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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
