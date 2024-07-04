import { semesterList } from "@/constants/header";
import {
  useRecruitingSearchInfoDispatch,
  useRecruitingSearchInfoState,
} from "@/hooks/contexts/useRecruitingSearchInfoContext";
import { SemesterType } from "@/types/dtos/recruiting";
import styled from "@emotion/styled";
import {
  Stack,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function RecruitingHeader() {
  const { semester } = useRecruitingSearchInfoState();
  const { setSemester } = useRecruitingSearchInfoDispatch();

  const handleChangeSemester = (e: SelectChangeEvent<unknown>) => {
    setSemester(e.target.value as SemesterType);
  };

  const handleClickAllDemote = () => {};
  const handleClickCreateRecruitments = () => {};

  return (
    <StyledHeaderWrapper>
      <StyledFormControl>
        <InputLabel>활동학기</InputLabel>
        <Select
          label="활동학기"
          value={semester}
          onChange={handleChangeSemester}
          style={{ height: "42px" }}
        >
          {semesterList.map(semester => (
            <MenuItem value={semester.value} key={semester.value}>
              {semester.name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      <StyledButton variant="outlined" color="error" onClick={handleClickAllDemote}>
        일괄 강등하기
      </StyledButton>
      <StyledButton variant="contained" onClick={handleClickCreateRecruitments}>
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
