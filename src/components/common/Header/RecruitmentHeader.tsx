import styled from "@emotion/styled";
import { Stack, Button } from "@mui/material";
import { useRecruitmentDispatchContext } from "@/hooks/contexts/useRecruitmentContext";

export default function RecruitmentHeader() {
  const { setDemoteModalOpen, setCreateSemesterInfoModalOpen } = useRecruitmentDispatchContext();

  const handleClickAllMemberDemote = () => {
    setDemoteModalOpen(true);
  };

  const handleClickCreateRecruitment = () => {
    setCreateSemesterInfoModalOpen(true);
  };

  return (
    <StyledHeaderWrapper>
      <StyledButton variant="outlined" color="error" onClick={handleClickAllMemberDemote}>
        일괄 강등하기
      </StyledButton>
      <StyledButton variant="contained" onClick={handleClickCreateRecruitment}>
        활동학기 생성
      </StyledButton>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 16,
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
