import { Button, Stack, styled } from "@mui/material";
import { useRecruitmentRoundSearchInfoDispatch } from "@/hooks/contexts/useRecruitmentRoundSearchInfoContext";

export default function RecruitmentRoundHeader() {
  const { setCreateRoundInfoModalOpen } = useRecruitmentRoundSearchInfoDispatch();

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
