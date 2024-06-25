import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { typo } from "@/styles/typo";
import useEditMemberInfoMutation from "@/hooks/mutations/useEditMemberInfoMutation";
import { formatPhoneNumber } from "@/utils/validation/formatPhoneNumber";
import { memberInfoValidation } from "@/utils/validation";

export type EditMemberInfoType = {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string;
  nickname: string;
};

type EditInfoModalProps = {
  open: boolean;
  onClose: () => void;
  memberInfo: EditMemberInfoType;
};

export default function EditInfoModal({ open, onClose, memberInfo }: EditInfoModalProps) {
  const [modalMemberInfo, setModalMemberInfo] = useState({
    ...memberInfo,
    discordUsername: memberInfo.discordUsername || null,
    nickname: memberInfo.nickname || null,
  });

  const {
    memberId,
    studentId,
    name,
    phone,
    department: { code: departmentCode },
    email,
    discordUsername,
    nickname,
  } = modalMemberInfo;

  const { mutate } = useEditMemberInfoMutation(
    memberId,
    {
      studentId,
      name,
      phone: formatPhoneNumber(phone),
      department: departmentCode,
      email,
      discordUsername: discordUsername,
      nickname: nickname,
    },
    () => onClose(),
  );

  const handleEditMemberInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "department") {
    }

    setModalMemberInfo(prevMemberInfo => ({
      ...prevMemberInfo,
      [name]: value,
    }));
  };

  const handleClickSave = () => {
    mutate();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <Typography css={typo.h1} sx={{ marginBottom: "38px" }}>
          정회원 정보 수정
        </Typography>
        <StyledInfoContainerWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>이름</Typography>
            <StyledTextField
              placeholder="이름"
              size="small"
              value={modalMemberInfo.name}
              name="name"
              onChange={handleEditMemberInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>학번</Typography>
            <StyledTextField
              placeholder="학번"
              size="small"
              value={modalMemberInfo.studentId}
              name="studentId"
              onChange={handleEditMemberInfo}
              error={memberInfoValidation.studentId.isError(studentId)}
              helperText={memberInfoValidation.studentId.helperText(studentId)}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>전화번호</Typography>
            <StyledTextField
              placeholder="전화번호"
              size="small"
              value={modalMemberInfo.phone}
              name="phone"
              onChange={handleEditMemberInfo}
              error={memberInfoValidation.phone.isError(phone)}
              helperText={memberInfoValidation.phone.helperText(phone)}
            />
          </StyledInfoWrapper>
        </StyledInfoContainerWrapper>
        <StyledInfoContainerWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>소속 학과</Typography>
            <StyledTextField
              placeholder="학과"
              size="small"
              value={modalMemberInfo.department?.name}
              name="department"
              onChange={handleEditMemberInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>이메일</Typography>
            <StyledTextField
              placeholder="이메일"
              size="small"
              value={modalMemberInfo.email}
              name="email"
              onChange={handleEditMemberInfo}
              error={memberInfoValidation.email.isError(email)}
              helperText={memberInfoValidation.email.helperText(email)}
            />
          </StyledInfoWrapper>
        </StyledInfoContainerWrapper>
        <StyledInfoContainerWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>디스코드 핸들명</Typography>
            <StyledTextField
              placeholder="핸들명"
              size="small"
              value={modalMemberInfo.discordUsername}
              name="discordUsername"
              onChange={handleEditMemberInfo}
            />
          </StyledInfoWrapper>
          <StyledInfoWrapper>
            <Typography css={typo.h6}>디스코드 커뮤니티 닉네임</Typography>
            <StyledTextField
              placeholder="닉네임"
              size="small"
              value={modalMemberInfo.nickname}
              name="nickname"
              onChange={handleEditMemberInfo}
              error={memberInfoValidation.nickname.isError(nickname)}
              helperText={memberInfoValidation.nickname.helperText(nickname)}
            />
          </StyledInfoWrapper>
        </StyledInfoContainerWrapper>
        <StyledButton size="large" variant="contained" css={typo.button1} onClick={handleClickSave}>
          저장하기
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
  padding: "58px",
  boxSizing: "border-box",
});

const StyledInfoContainerWrapper = styled(Box)({
  display: "flex",
  gap: "19.15px",
  height: "71px",
  marginBottom: "48px",
});

const StyledInfoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",
  flex: 1,
});

const StyledTextField = styled(TextField)({
  "width": "100%",

  ".MuiInputBase-root": {
    borderRadius: 0,
    border: "1px solid #BEC3CC",
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

  ".MuiInputBase-input::placeholder": {
    color: "#646D7A",
  },
});

const StyledButton = styled(Button)({
  width: "316px",
  height: "63px",
  padding: "8px 22px",
});
