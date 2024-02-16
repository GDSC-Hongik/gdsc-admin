import { MemberInfoStateType } from "@types/main";
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
        <StyledText>이름</StyledText>
        <StyledTextField size="small" name="name" value={name} onChange={handleChangeMemberInfo} />
      </ColContainer>
      <ColContainer>
        <StyledText>학번</StyledText>
        <StyledTextField
          size="small"
          name="studentId"
          value={studentId}
          onChange={handleChangeMemberInfo}
        />
      </ColContainer>
      <ColContainer>
        <StyledText>전화번호</StyledText>
        <StyledTextField
          size="small"
          name="phone"
          value={phone}
          onChange={handleChangeMemberInfo}
        />
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
  alignItems: "flex-start",
});

const StyledText = styled(Box)({
  marginBottom: "12px",
});

const StyledTextField = styled(TextField)({ width: "100%" });
