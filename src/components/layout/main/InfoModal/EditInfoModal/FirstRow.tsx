import { MemberInfoStateType } from "..";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type FirstRowProps = Pick<MemberInfoStateType, "name" | "studentId" | "phone"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FirstRow({
  name,
  studentId,
  phone,
  handleChangeMemberInfo,
}: FirstRowProps) {
  return (
    <RowContainer>
      <ColContainer>
        <Box>이름</Box>
        <TextField size="small" name="name" value={name} onChange={handleChangeMemberInfo} />
      </ColContainer>
      <ColContainer>
        <Box>학번</Box>
        <TextField
          size="small"
          name="studentId"
          value={studentId}
          onChange={handleChangeMemberInfo}
        />
      </ColContainer>
      <ColContainer>
        <Box>전화번호</Box>
        <TextField size="small" name="phone" value={phone} onChange={handleChangeMemberInfo} />
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
