import styled from "@emotion/styled";
import { Stack, Button } from "@mui/material";

export default function RecruitingHeader() {
  const handleClickAllDemote = () => {};
  const handleClickCreateRecruitments = () => {};

  return (
    <StyledHeaderWrapper>
      <StyledButton variant="outlined" onClick={handleClickAllDemote}>
        일괄 강등하기
      </StyledButton>
      <StyledButton variant="contained" onClick={handleClickCreateRecruitments}>
        리크루팅 생성
      </StyledButton>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledButton = styled(Button)({
  padding: "6px 16px",
  height: "34px",
});
