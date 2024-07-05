import { useState } from "react";
import { Stack, Button } from "@mui/material";
import styled from "@emotion/styled";
import useDemoteAllMemberMutation from "@/hooks/mutations/useDemoteAllMemberMutation";
import { SemesterVariantType } from "@/types/entities/recruiting";

export default function RecruitingHeader() {
  const [semester, setSemester] = useState<SemesterVariantType | "">("");

  const academicYear = new Date().getFullYear();

  const { mutate } = useDemoteAllMemberMutation(academicYear, semester as SemesterVariantType);

  const handleClickAllMemberDemote = () => {
    semester && mutate();
    setSemester("");
  };

  const handleClickCreateRecruitment = () => {};

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
