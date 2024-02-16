import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export default function FirstRow() {
  return (
    <RowContainer>
      <ColContainer>
        <Box>이름</Box>
        <TextField size="small" />
      </ColContainer>
      <ColContainer>
        <Box>학번</Box>
        <TextField size="small" />
      </ColContainer>
      <ColContainer>
        <Box>전화번호</Box>
        <TextField size="small" />
      </ColContainer>
    </RowContainer>
  );
}

const RowContainer = styled.div({
  display: "flex",
  gap: "19px",
  marginBottom: "48px",
});

const ColContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});
