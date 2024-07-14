import styled from "@emotion/styled";
import { Modal, Typography, Box, Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import WarningIcon from "@/assets/warning.svg?react";

type CreateSemesterInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
};

export default function CreateSemesterInfoModal({
  open,
  onClose,
}: CreateSemesterInfoModalPropsType) {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>학기 정보 생성</StyledTitle>
        <StyledContentWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item1" }}>
            <StyledText>활동연도</StyledText>
            <StyledTextField
              placeholder="연도"
              size="small"
              value={""}
              name="academicYear"
              onChange={() => {}}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item2" }}>
            <StyledText>활동학기</StyledText>
            <StyledTextField
              placeholder="학기"
              size="small"
              value={""}
              name="semester"
              onChange={() => {}}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item3" }}>
            <StyledText>회비</StyledText>
            <StyledTextField
              placeholder="회비"
              size="small"
              value={""}
              name="fee"
              onChange={() => {}}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item4" }}>
            <StyledText>학기 시작일</StyledText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDatePicker name="endDate" onChange={() => {}} />
            </LocalizationProvider>
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item5" }}>
            <StyledText>학기 종료일</StyledText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDatePicker name="endDate" onChange={() => {}} />
            </LocalizationProvider>
          </StyledInfoWrapper>
        </StyledContentWrapper>
        <StyledWarningTextWrapper>
          <WarningIcon />
          <StyledWarningText color="error">
            1차 신청기간 시작 전에 수동으로 [일괄 강등하기] 버튼을 눌러야 해요.
          </StyledWarningText>
        </StyledWarningTextWrapper>
        <StyledButton size="large" variant="contained" onClick={() => {}}>
          {"생성하기"}
        </StyledButton>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const StyledModalContentWrapper = styled("main")({
  width: "988px",
  height: "640px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "40px",
});

const StyledTitle = styled(Typography)({
  fontFamily: "SUIT v1",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "41.6px",
  letterSpacing: "-0.32px",
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "71px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  flex: 1,
}));

const StyledTextField = styled(TextField)({
  "width": "100%",

  ".MuiInputBase-root": {
    borderRadius: 4,
    border: "1px solid #C2C2C2",
    padding: "8px 14px",
    height: "40px",
  },

  ".MuiInputBase-input": {
    padding: 0,
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "22.4px",
  },

  "fieldset": {
    border: "none",
  },

  ".MuiInputBase-input::placeholder": {
    color: "#C2C2C2",
  },
});

const StyledText = styled(Typography)({
  color: "#6B6B6B",
  fontFamily: "SUIT v1",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "14px",
  letterSpacing: "-0.14px",
});

const StyledButton = styled(Button)({
  padding: "16px 0px",
  width: "328px",
  height: "48px",
});

const StyledWarningTextWrapper = styled(Box)({
  display: "flex",
  gap: "10px",
});

const StyledWarningText = styled(Typography)({});

const StyledContentWrapper = styled(Box)({
  height: "100%",
  width: "100%",
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateAreas: `
    "item1 item2 ."
    "item3 . ."
    "item4 item5 ."
  `,
  gap: "10px",
  alignContent: "space-between",
});

const StyledDatePicker = styled(DatePicker)({
  input: {
    height: "26px",
    padding: "8px 12px",
  },

  width: "297px",
});
