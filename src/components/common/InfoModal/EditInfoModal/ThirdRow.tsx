import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { AllMemberInfoStateType } from "@/types/entities/member";

type ThirdRowProps = Pick<AllMemberInfoStateType, "discordUsername" | "nickname"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ThirdRow({
  discordUsername,
  nickname,
  handleChangeMemberInfo,
}: ThirdRowProps) {
  return (
    <RowContainer>
      <ColContainer>
        <StyledText>디스코드 핸들명</StyledText>
        <StyledTextField
          size="small"
          name="discordUsername"
          value={discordUsername}
          onChange={handleChangeMemberInfo}
        />
      </ColContainer>
      <ColContainer>
        <StyledText>디스코드 닉네임</StyledText>
        <StyledTextField
          size="small"
          name="nickname"
          value={nickname}
          onChange={handleChangeMemberInfo}
        />
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
  alignItems: "flex-start",
});

const StyledText = styled(Box)({
  marginBottom: "12px",
});

const StyledTextField = styled(TextField)({ width: "100%" });
