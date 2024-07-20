import { ChangeEvent, useMemo, useState } from "react";
import styled from "@emotion/styled";
import {
  Modal,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import XIcon from "@/assets/x.svg?react";
import { emailSelectMenu } from "@/constants/member";
import { QueryKey } from "@/constants/queryKey";
import useEditMemberInfoMutation from "@/hooks/mutations/useEditMemberInfoMutation";
import useGetDepartmentListQuery from "@/hooks/queries/useGetDepartmentListQuery";
import { typo } from "@/styles/typo";
import { DepartmentListResponseDtoType } from "@/types/dtos/member";
import { EditMemberInfoType } from "@/types/entities/member";
import { memberInfoValidation } from "@/utils/validation";
import { formatPhoneNumber } from "@/utils/validation/formatPhoneNumber";

type EditMemberInfoModalProps = {
  open: boolean;
  onClose: () => void;
  memberInfo: EditMemberInfoType;
};

export default function EditMemberInfoModal({
  open,
  onClose,
  memberInfo,
}: EditMemberInfoModalProps) {
  const [modalMemberInfo, setModalMemberInfo] = useState({
    ...memberInfo,
    discordUsername: memberInfo.discordUsername || null,
    nickname: memberInfo.nickname || null,
  });
  const [departmentSearchText, setDepartmentSearchText] = useState(memberInfo.department.name);
  const [removedDepartments, setRemovedDepartments] = useState<string[]>([]);
  const [domain, setDomain] = useState<string>("gmail.com");
  const [emailUsername] = modalMemberInfo.email.split("@");

  const {
    memberId,
    studentId,
    name,
    phone,
    department: { code: departmentCode },
    discordUsername,
    nickname,
  } = modalMemberInfo;

  const { departmentList } = useGetDepartmentListQuery(departmentSearchText);

  const queryClient = useQueryClient();

  const searchedDepartmentList = useMemo(() => {
    return departmentList.filter(department => !removedDepartments.includes(department.code));
  }, [departmentList, removedDepartments]);

  const { mutate } = useEditMemberInfoMutation();

  const handleEditMemberInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "department") {
      setDepartmentSearchText(value);
      return;
    }

    setModalMemberInfo(prevMemberInfo => ({
      ...prevMemberInfo,
      [name]: value,
    }));
  };

  const handleClickSave = () => {
    if (!name || !studentId || !phone || !departmentCode || !emailUsername) {
      toast.error(`채워지지 않는 필드가 있어요. 모든 필드를 채워주세요!`);
      return;
    }

    mutate(
      {
        memberId,
        body: {
          studentId,
          name,
          phone: formatPhoneNumber(phone),
          department: departmentCode,
          email: `${emailUsername}@${domain}`,
          discordUsername,
          nickname,
        },
      },
      {
        onSuccess: () => {
          Promise.all([
            queryClient.invalidateQueries({
              queryKey: [QueryKey.allMemberList],
            }),
          ]);
          toast.success("수정 완료되었습니다.");
          onClose();
        },
      },
    );
  };

  const handleClickDepartmentItem = (departmentItem: DepartmentListResponseDtoType) => {
    setDepartmentSearchText(departmentItem.name);
    setModalMemberInfo(prevInfo => ({
      ...prevInfo,
      department: departmentItem,
    }));
  };

  const handleClickRemoveDepartmentItem = (departmentItem: DepartmentListResponseDtoType) => {
    setRemovedDepartments(prevRemovedDepartments => [
      ...prevRemovedDepartments,
      departmentItem.code,
    ]);
  };

  const handleChangeSelect = (e: SelectChangeEvent<unknown>) => {
    setDomain(e.target.value as string);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>정회원 정보 수정</StyledTitle>
        <StyledContentWrapper>
          <StyledInfoRowWrapper>
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
          </StyledInfoRowWrapper>
          <StyledInfoRowWrapper>
            <StyledInfoWrapper height={123}>
              <Typography css={typo.h6}>소속 학과</Typography>
              <StyledTextField
                placeholder="학과"
                size="small"
                value={departmentSearchText}
                name="department"
                onChange={handleEditMemberInfo}
              />
              <StyledDivider />
              <StyledDepartmentListWrapper>
                {searchedDepartmentList.map((departmentItem, index) => (
                  <StyledDepartmentItemWrapper key={index}>
                    <StyledXIcon onClick={() => handleClickRemoveDepartmentItem(departmentItem)} />
                    <StyledDepartmentName
                      css={typo.body3}
                      onClick={() => handleClickDepartmentItem(departmentItem)}
                    >
                      {departmentItem.name}
                    </StyledDepartmentName>
                  </StyledDepartmentItemWrapper>
                ))}
              </StyledDepartmentListWrapper>
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <Typography css={typo.h6}>이메일</Typography>
              <StyledTextField
                placeholder="이메일 주소"
                size="small"
                value={emailUsername}
                name="email"
                onChange={handleEditMemberInfo}
              />
            </StyledInfoWrapper>
            <StyledSelect value={domain} onChange={handleChangeSelect} placeholder="선택하세요">
              {emailSelectMenu.map(email => (
                <MenuItem key={email} value={email}>
                  {email}
                </MenuItem>
              ))}
            </StyledSelect>
          </StyledInfoRowWrapper>
          <StyledInfoRowWrapper>
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
          </StyledInfoRowWrapper>
        </StyledContentWrapper>
        <StyledButton size="large" variant="contained" onClick={handleClickSave}>
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
  padding: "40px",
  boxSizing: "border-box",
});

const StyledContentWrapper = styled(Box)({
  height: "410px",
  padding: "10px",
  marginBottom: "20px",
});

const StyledInfoRowWrapper = styled(Box)({
  display: "flex",
  gap: "19.15px",
  height: "fit-content",
  marginBottom: "48px",
});

const StyledTitle = styled(Typography)({
  marginBottom: "20px",
  fontFamily: "SUIT v1",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "41.6px",
  letterSpacing: "-0.32px",
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "89px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  width: "100%",
  maxWidth: "283px",
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

  ".MuiInputBase-input::placeholder": {
    color: "#646D7A",
  },

  "fieldset": {
    border: "none",
  },
});

const StyledSelect = styled(Select)({
  borderRadius: 4,
  border: "1px solid #C2C2C2",
  height: "40px",
  width: "100%",
  marginTop: "31px",

  fieldset: {
    border: "none",
  },
});

const StyledButton = styled(Button)({
  width: "328px",
  height: "48px",
  padding: "16px 0",
  fontFamily: "SUIT v1",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "-0.16px",
});

const StyledDivider = styled("div")({
  width: "100%",
  height: "1px",
  margin: 0,
  backgroundColor: "#BEC3CC",
});

const StyledDepartmentListWrapper = styled("ul")({
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  gap: "24px",
  width: "100%",
});

const StyledDepartmentItemWrapper = styled("li")({
  height: "24px",
  gap: "12px",
  display: "flex",
  minWidth: "fit-content",
});

const StyledXIcon = styled(XIcon)({ cursor: "pointer" });

const StyledDepartmentName = styled(Typography)({
  cursor: "pointer",
  padding: "2px",
});
