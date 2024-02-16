import { MemberInfoStateType } from "..";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type SecondRowProps = Pick<MemberInfoStateType, "department" | "email"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SecondRow({ department, email, handleChangeMemberInfo }: SecondRowProps) {
  return (
    <RowContainer>
      <ColContainer>
        <Box>소속학과</Box>
        <TextField
          size="small"
          sx={{ marginBottom: "18px" }}
          name="department"
          value={department}
          onChange={handleChangeMemberInfo}
        />
        <Divider />
        <div style={{ fontSize: "14px", fontWeight: "500", lineHeight: "140%" }}>학과</div>
      </ColContainer>
      <ColContainer>
        <Box>이메일</Box>
        <TextField size="small" name="email" value={email} onChange={handleChangeMemberInfo} />
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

const Divider = styled.div({
  width: "100%",
  height: "1px",
  backgroundColor: "#BEC3CC",
  marginBottom: "18px",
});
