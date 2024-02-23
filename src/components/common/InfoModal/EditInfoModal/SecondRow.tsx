import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { theme } from "@/styles/theme";
import { AllMemberInfoStateType } from "@/types/entities/member";

type SecondRowProps = Pick<AllMemberInfoStateType, "department" | "email"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SecondRow({ department, email, handleChangeMemberInfo }: SecondRowProps) {
  return (
    <RowContainer>
      <ColContainer>
        <StyledText>소속학과</StyledText>
        <StyledTextField
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
        <StyledText>이메일</StyledText>
        <StyledTextField
          size="small"
          name="email"
          value={email}
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

const Divider = styled.div({
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.gray6,
  marginBottom: "18px",
});

const StyledText = styled(Box)({
  marginBottom: "12px",
});

const StyledTextField = styled(TextField)({ width: "100%" });
