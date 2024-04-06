import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { AllMemberInfoStateType } from "@/types/entities/member";
import { memberInfoValidation } from "@/utils/validation";
import { formatPhoneNumber } from "@/utils/validation/formatPhoneNumber";

type BasicInfoProps = Pick<AllMemberInfoStateType, "name" | "studentId" | "phone"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function BasicInfo({
  name,
  studentId,
  phone,
  handleChangeMemberInfo,
}: BasicInfoProps) {
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
          error={memberInfoValidation.studentId.isError(studentId)}
          helperText={memberInfoValidation.studentId.helperText(studentId)}
        />
      </ColContainer>
      <ColContainer>
        <StyledText>전화번호</StyledText>
        <StyledTextField
          size="small"
          name="phone"
          value={formatPhoneNumber(phone)}
          onChange={handleChangeMemberInfo}
          error={memberInfoValidation.phone.isError(phone)}
          helperText={memberInfoValidation.phone.helperText(phone)}
        />
      </ColContainer>
    </RowContainer>
  );
}

const RowContainer = styled.div({
  display: "flex",
  gap: "19px",
  marginBottom: "20px",
});

const ColContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-start",
  height: "100px",
});

const StyledText = styled(Box)({
  marginBottom: "12px",
});

const StyledTextField = styled(TextField)({ width: "100%" });
