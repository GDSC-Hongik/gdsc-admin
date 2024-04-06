import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Modal, Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import AdditionalInfo from "./AdditionalInfo";
import BasicInfo from "./BasicInfo";
import DiscordInfo from "./DiscordInfo";
import useEditMemberInfoMutation from "@/hooks/mutations/useEditMemberInfoMutation";
import { theme } from "@/styles/theme";
import { AllMemberInfoStateType } from "@/types/entities/member";
import { memberInfoValidation } from "@/utils/validation";
import { formatPhoneNumber } from "@/utils/validation/formatPhoneNumber";

type EditInfoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  handleCloseModal: () => void;
  selectedMemberInfo: AllMemberInfoStateType;
  setDepartmentSearchText: Dispatch<SetStateAction<string>>;
  departmentSearchText: string;
};

export default function EditInfoModal({
  isModalVisible,
  setIsModalVisible,
  handleCloseModal,
  selectedMemberInfo,
  setDepartmentSearchText,
  departmentSearchText,
}: EditInfoModalProps) {
  const [memberInfo, setMemberInfo] = useState<AllMemberInfoStateType>({
    name: "",
    memberId: 0,
    studentId: "",
    phone: "",
    department: {
      code: "",
      name: "",
    },
    email: "",
    discordUsername: null,
    nickname: null,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    name,
    studentId,
    phone,
    email,
    discordUsername,
    nickname,
    memberId,
    department: { code: departmentCode, name: departmentName },
  } = memberInfo;

  useEffect(() => {
    setMemberInfo({
      memberId: selectedMemberInfo.memberId || 0,
      name: selectedMemberInfo.name || "",
      studentId: selectedMemberInfo.studentId || "",
      phone: selectedMemberInfo.phone || "",
      department: selectedMemberInfo.department || {
        code: "",
        name: "",
      },
      email: selectedMemberInfo.email || "",
      discordUsername: selectedMemberInfo.discordUsername || null,
      nickname: selectedMemberInfo.nickname || null,
    });
    setDepartmentSearchText(selectedMemberInfo.department.name || "");
  }, [selectedMemberInfo, isModalVisible, setDepartmentSearchText]);

  useEffect(() => {
    const isStudentIdValid =
      !memberInfo.studentId ||
      RegExp(memberInfoValidation.studentId.regExp).test(memberInfo.studentId);
    const isPhoneValid =
      !memberInfo.phone ||
      RegExp(memberInfoValidation.phone.regExp).test(formatPhoneNumber(memberInfo.phone));
    const isEmailValid =
      !memberInfo.email || RegExp(memberInfoValidation.email.regExp).test(memberInfo.email);
    const isNicknameValid =
      !memberInfo.nickname ||
      RegExp(memberInfoValidation.nickname.regExp).test(memberInfo.nickname);

    const isSaveButtonDisabled = !(
      isStudentIdValid &&
      isPhoneValid &&
      isEmailValid &&
      isNicknameValid
    );

    setIsButtonDisabled(isSaveButtonDisabled);
  }, [memberInfo]);

  const handleChangeMemberInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "department") {
      setDepartmentSearchText(value);
    }

    setMemberInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickEditMemberInfoButton = () => {
    if (departmentName === departmentSearchText) {
      editMemberMutation.mutate();
    } else {
      toast.error("학과를 선택해주세요.");
    }
  };

  const editMemberMutation = useEditMemberInfoMutation(
    memberId,
    {
      studentId,
      name,
      phone: formatPhoneNumber(phone),
      department: departmentCode,
      email,
      discordUsername: discordUsername || null,
      nickname: nickname || null,
    },
    () => setIsModalVisible(false),
  );

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer sx={{ marginBottom: "32px" }}>멤버 정보 수정</TitleContainer>
        <BasicInfo
          name={name}
          studentId={studentId}
          phone={phone}
          handleChangeMemberInfo={handleChangeMemberInfo}
        />
        <AdditionalInfo
          email={email}
          setMemberInfo={setMemberInfo}
          handleChangeMemberInfo={handleChangeMemberInfo}
          departmentSearchText={departmentSearchText}
          setDepartmentSearchText={setDepartmentSearchText}
        />
        <DiscordInfo
          discordUsername={discordUsername}
          nickname={nickname}
          handleChangeMemberInfo={handleChangeMemberInfo}
        />
        <StyledButton
          variant={"contained"}
          size="large"
          disabled={isButtonDisabled}
          onClick={handleClickEditMemberInfoButton}
        >
          저장하기
        </StyledButton>
      </ModalContentContainer>
    </Modal>
  );
}

const ModalContentContainer = styled(Box)({
  width: "60%",
  height: "520px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "64px 63px 44px 63px",
  textAlign: "center",
});

const TitleContainer = styled(Box)({
  ...theme.typo.title1,
});

const StyledButton = styled(Button)({
  width: "216px",
  height: "43px",
});
