import { Button, Stack, styled } from "@mui/material";

export default function RecruitingRoundHeader() {
  return (
    <StyledHeaderWrapper>
      <Button variant="contained">모집 회차 생성</Button>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "16px",
});
