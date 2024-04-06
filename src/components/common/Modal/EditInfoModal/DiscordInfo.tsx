import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { AllMemberInfoStateType } from "@/types/entities/member";
import { memberInfoValidation } from "@/utils/validation";

type DiscordInfoProps = Pick<AllMemberInfoStateType, "discordUsername" | "nickname"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DiscordInfo({
  discordUsername,
  nickname,
  handleChangeMemberInfo,
}: DiscordInfoProps) {
  return (
    <RowContainer>
      <ColContainer>
        <StyledText>디스코드 사용자명</StyledText>
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
          error={memberInfoValidation.nickname.isError(nickname)}
          helperText={memberInfoValidation.nickname.helperText(nickname)}
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
