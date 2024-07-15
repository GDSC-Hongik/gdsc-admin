import { Button, Stack, styled } from "@mui/material";
import { useRecruitmentRoundDispatchContext } from "@/hooks/contexts/useRecruitmentRoundContext";

export default function RecruitmentRoundHeader() {
  const { setCreateRoundModalOpen } = useRecruitmentRoundDispatchContext();

  const handleClickCreateRound = () => {
    setCreateRoundModalOpen(true);
  };

  return (
    <StyledHeaderWrapper>
      <Button variant="contained" onClick={handleClickCreateRound}>
        모집 회차 생성
      </Button>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "16px",
});
