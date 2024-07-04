import { useState } from "react";
import {
  Stack,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import styled from "@emotion/styled";
import { semesterList } from "@/constants/header";
import useDemoteAllMemberMutation from "@/hooks/mutations/useDemoteAllMemberMutation";
import { SemesterVariantType } from "@/types/entities/recruiting";

export default function RecruitingHeader() {
  const [semester, setSemester] = useState<SemesterVariantType | "">("");

  const academicYear = new Date().getFullYear();

  const { mutate } = useDemoteAllMemberMutation(academicYear, semester as SemesterVariantType);

  const handleChangeSemester = (e: SelectChangeEvent<unknown>) => {
    setSemester(e.target.value as SemesterVariantType);
  };

  const handleClickAllMemberDemote = () => {
    semester && mutate();
    setSemester("");
  };

  const handleClickCreateRecruitment = () => {};

  return (
    <StyledHeaderWrapper>
      <StyledFormControl>
        <InputLabel>활동학기</InputLabel>
        <StyledSelect label="활동학기" value={semester} onChange={handleChangeSemester}>
          {semesterList.map(semester => (
            <MenuItem value={semester.value} key={semester.value}>
              {semester.name}
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
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

const StyledSelect = styled(Select)({ height: "42px" });

const StyledButton = styled(Button)({
  padding: "6px 16px",
  height: "34px",
});

const StyledFormControl = styled(FormControl)({
  "width": "115px",

  ".MuiFormLabel-root": {
    top: "-6px",
  },

  ".MuiInputLabel-shrink": {
    height: "fit-content",
    top: "0",
  },
});
