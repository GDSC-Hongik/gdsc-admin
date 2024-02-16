import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export default function ThirdRow() {
  return (
    <RowContainer>
      <ColContainer>
        <Box>디스코드 핸들명</Box>
        <TextField size="small" />
      </ColContainer>
      <ColContainer>
        <Box>디스코드 닉네임</Box>
        <TextField size="small" />
      </ColContainer>
    </RowContainer>
  );
}

const RowContainer = styled.div({
  display: "flex",
  gap: "19px",
  marginBottom: "64px",
});

const ColContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});
