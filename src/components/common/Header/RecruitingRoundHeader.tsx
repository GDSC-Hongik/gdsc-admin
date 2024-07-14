import { Button, Stack, styled } from "@mui/material";
import { useRecruitingRoundSearchInfoDispatch } from "@/hooks/contexts/useRecruitingRoundSearchInfoContext";

export default function RecruitingRoundHeader() {
  const { setCreateRoundInfoModalOpen } = useRecruitingRoundSearchInfoDispatch();

  const handleClickCreateRound = () => {
    setCreateRoundInfoModalOpen(true);
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
