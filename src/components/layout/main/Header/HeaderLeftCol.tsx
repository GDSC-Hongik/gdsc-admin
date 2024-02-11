import { FormControl, InputLabel, Select, MenuItem, TextField, Stack, styled } from "@mui/material";

export default function HeaderLeftCol() {
  return (
    <Container>
      <FormControl sx={{ width: "180px" }}>
        <InputLabel>Type</InputLabel>
        <Select>
          <MenuItem value={1}>학번</MenuItem>
          <MenuItem value={2}>이름</MenuItem>
          <MenuItem value={3}>전화번호</MenuItem>
          <MenuItem value={4}>소속 학과</MenuItem>
          <MenuItem value={5}>이메일</MenuItem>
          <MenuItem value={6}>디스코드 사용자명</MenuItem>
          <MenuItem value={7}>디스코드 닉네임</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: "190px" }}
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
