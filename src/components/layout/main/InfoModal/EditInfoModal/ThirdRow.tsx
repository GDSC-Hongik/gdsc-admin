import { MemberInfoStateType } from "..";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type ThirdRowProps = Pick<MemberInfoStateType, "discordUsername" | "nickname"> & {
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
        <Box>디스코드 핸들명</Box>
        <TextField
          size="small"
          name="discordUsername"
          value={discordUsername}
          onChange={handleChangeMemberInfo}
        />
      </ColContainer>
      <ColContainer>
        <Box>디스코드 닉네임</Box>
        <TextField
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
});
