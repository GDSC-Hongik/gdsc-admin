import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import useEditRecruitmentRound from "@/hooks/mutations/useEditRecruitmentRound";

export type RecruitingRoundInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  editRoundInfo?: any;
};

export default function RecruitingRoundInfoModal({
  open,
  onClose,
  isEdit = false,
  editRoundInfo,
}: RecruitingRoundInfoModalPropsType) {
  const [roundModalInfo, setRoundModalInfo] = useState<{
    academicYear: string;
    semester: string;
    round: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    name: string;
  }>({
    academicYear: "",
    semester: "",
    round: "1",
    startDate: null,
    endDate: null,
    name: "",
  });
  const [editRoundModalInfo, setEditRoundModalInfo] = useState<{
    recruitmentRoundId: number;
    academicYear: string;
    semester: string;
    round: "1차" | "2차";
    startDate: Dayjs;
    endDate: Dayjs;
    name: string;
  }>({
    ...editRoundInfo,
    startDate: dayjs(editRoundInfo?.startDate),
    endDate: dayjs(editRoundInfo?.endDate),
  });

  const { mutate } = useEditRecruitmentRound();

  useEffect(() => {
    setEditRoundModalInfo({
      ...editRoundInfo,
      startDate: dayjs(editRoundInfo?.startDate),
      endDate: dayjs(editRoundInfo?.endDate),
    });
  }, [editRoundInfo]);

  const handleChangeRoundModalInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (isEdit) {
      setEditRoundModalInfo(prevModalInfo => ({
        ...prevModalInfo,
        [name]: value,
      }));
      return;
    }
    setRoundModalInfo(prevModalInfo => ({
      ...prevModalInfo,
      [name]: value,
    }));
  };

  const handleChangeStartDate = (newDate: Dayjs | null) => {
    if (!newDate) {
      return;
    }

    if (isEdit) {
      setEditRoundModalInfo(prevModalInfo => ({
        ...prevModalInfo,
        startDate: newDate,
      }));
      return;
    }
    setRoundModalInfo(prevModalInfo => ({
      ...prevModalInfo,
      startDate: newDate,
    }));
  };

  const handleChangeEndDate = (newDate: Dayjs | null) => {
    if (!newDate) {
      return;
    }

    if (isEdit) {
      setEditRoundModalInfo(prevModalInfo => ({
        ...prevModalInfo,
        endDate: newDate,
      }));
      return;
    }
    setRoundModalInfo(prevModalInfo => ({
      ...prevModalInfo,
      endDate: newDate,
    }));
  };

  const handleClickSubmit = () => {
    if (isEdit) {
      mutate({
        recruitmentRoundId: editRoundModalInfo.recruitmentRoundId,
        body: {
          name: editRoundModalInfo.name,
          startDate: editRoundModalInfo.startDate?.toDate().toISOString(),
          endDate: editRoundModalInfo.startDate?.toDate().toISOString(),
          roundType: editRoundModalInfo.round === "1차" ? "FIRST" : "SECOND",
        },
      });
      return;
    }
    console.log(roundModalInfo);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>{isEdit ? "모집 회차 수정" : "모집 회차 생성"}</StyledTitle>
        <StyledContentWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item1" }}>
            <StyledText>활동연도</StyledText>
            <StyledTextField
              isedit={isEdit ? 1 : 0}
              placeholder="연도"
              size="small"
              inputProps={{ readOnly: isEdit }}
              value={editRoundModalInfo?.academicYear ?? roundModalInfo.academicYear}
              name="academicYear"
              onChange={handleChangeRoundModalInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item2" }}>
            <StyledText>활동학기</StyledText>
            <StyledTextField
              isedit={isEdit ? 1 : 0}
              placeholder="학기"
              size="small"
              inputProps={{ readOnly: isEdit }}
              value={editRoundModalInfo?.semester ?? roundModalInfo.semester}
              name="semester"
              onChange={handleChangeRoundModalInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item3" }}>
            <StyledText>차수</StyledText>
            <StyledRadioGroup
              name="round"
              row
              value={editRoundModalInfo?.round ?? roundModalInfo.round}
              onChange={handleChangeRoundModalInfo}
            >
              <FormControlLabel value="1" control={<Radio />} label="1차" />
              <FormControlLabel value="2" control={<Radio />} label="2차" />
            </StyledRadioGroup>
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item4" }}>
            <StyledText>모집 시작일</StyledText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDatePicker
                name="startDate"
                value={editRoundModalInfo?.startDate ?? roundModalInfo.startDate}
                onChange={handleChangeStartDate}
              />
            </LocalizationProvider>
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item5" }}>
            <StyledText>모집 종료일</StyledText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDatePicker
                name="endDate"
                value={editRoundModalInfo?.startDate ?? roundModalInfo.startDate}
                onChange={handleChangeEndDate}
              />
            </LocalizationProvider>
          </StyledInfoWrapper>
          <StyledInfoWrapper sx={{ gridArea: "item6" }}>
            <StyledText>모집 회차 이름</StyledText>
            <StyledTextField
              placeholder="이름"
              size="small"
              value={editRoundModalInfo?.name ?? roundModalInfo.name}
              name="name"
              onChange={handleChangeRoundModalInfo}
            />
          </StyledInfoWrapper>
        </StyledContentWrapper>
        <StyledButton size="large" variant="contained" onClick={handleClickSubmit}>
          {isEdit ? "수정하기" : "생성하기"}
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

const StyledButton = styled(Button)({
  padding: "16px 0px",
  width: "328px",
  height: "48px",
});

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
    "item6 . ."
  `,
  gap: "10px",
  alignContent: "space-between",
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "71px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  flex: 1,
}));

const StyledTextField = styled(TextField)<{ isedit?: number }>(({ isedit = 0 }) => ({
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

  "input": { color: isedit ? "#C2C2C2" : "#121212" },
}));

const StyledText = styled(Typography)({
  color: "#6B6B6B",
  fontFamily: "SUIT v1",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "14px",
  letterSpacing: "-0.14px",
});

const StyledDatePicker = styled(DatePicker)({
  input: {
    height: "26px",
    padding: "8px 12px",
  },

  width: "297px",
});

const StyledRadioGroup = styled(RadioGroup)({
  gap: "50px",
});
