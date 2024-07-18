import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import WarningIcon from "@/assets/warning.svg?react";
import useDemoteAllMemberMutation from "@/hooks/mutations/useDemoteAllMemberMutation";

type DemoteMembersModalPropsType = {
  open: boolean;
  onClose: () => void;
};

export default function DemoteMembersModal({ open, onClose }: DemoteMembersModalPropsType) {
  const [academicInfo, setAcademicInfo] = useState({
    academicYear: "",
    semester: "",
  });

  const { mutate } = useDemoteAllMemberMutation();

  const handleChangeAcademicInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setAcademicInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickDemote = () => {
    const { academicYear, semester } = academicInfo;

    if (!academicYear || !semester) {
      toast.error(`채워지지 않는 필드가 있어요. 모든 필드를 채워주세요!`);
      return;
    }

    mutate(
      {
        academicYear: Number(academicYear),
        semesterType: semester === "1" ? "FIRST" : "SECOND",
      },
      {
        onSuccess: () => {
          toast.success("정회원 일괄 강등하였습니다!");
          onClose();
        },
      },
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>일괄 강등하기</StyledTitle>
        <StyledContentWrapper>
          <StyledInfoWrapper>
            <StyledText>활동연도</StyledText>
            <StyledTextField
              placeholder="연도"
              size="small"
              value={academicInfo.academicYear}
              name="academicYear"
              onChange={handleChangeAcademicInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <StyledText>활동학기</StyledText>
            <StyledTextField
              placeholder="학기"
              size="small"
              value={academicInfo.semester}
              name="semester"
              onChange={handleChangeAcademicInfo}
            />
          </StyledInfoWrapper>
        </StyledContentWrapper>
        <StyledWarningTextWrapper>
          <WarningIcon />
          <StyledWarningText color="error">
            해당 학기의 정회원을 모두 준회원으로 강등합니다.
          </StyledWarningText>
        </StyledWarningTextWrapper>
        <StyledButton size="large" variant="contained" onClick={handleClickDemote}>
          {"강등하기"}
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

const StyledContentWrapper = styled(Box)({
  height: "100%",
  width: "100%",
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
});

const StyledWarningTextWrapper = styled(Box)({
  display: "flex",
  gap: "10px",
});

const StyledWarningText = styled(Typography)({});

const StyledButton = styled(Button)({
  width: "328px",
  height: "48px",
  padding: "16px 0",
  marginTop: "auto",
  fontFamily: "SUIT v1",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "-0.16px",
  margin: "auto",
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
