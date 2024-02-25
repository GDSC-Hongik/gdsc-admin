import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { Modal, Box, Button } from "@mui/material";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import { theme } from "@/styles/theme";
import { AllMemberInfoStateType, AllMemberInfoType } from "@/types/entities/member";

type EditInfoModalProps = {
  isModalVisible: boolean;
  handleCloseModal: () => void;
  selectedMemberInfo: AllMemberInfoType;
};

export default function EditInfoModal({
  isModalVisible,
  handleCloseModal,
  selectedMemberInfo,
}: EditInfoModalProps) {
  const [memberInfo, setMemberInfo] = useState<AllMemberInfoStateType>({
    name: selectedMemberInfo.name,
    studentId: selectedMemberInfo.studentId,
    phone: selectedMemberInfo.phone,
    department: selectedMemberInfo.department,
    email: selectedMemberInfo.email,
    discordUsername: selectedMemberInfo.discordUsername,
    nickname: selectedMemberInfo.nickname,
  });

  const handleChangeMemberInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMemberInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, studentId, phone, department, email, discordUsername, nickname } = memberInfo;

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer sx={{ marginBottom: "32px" }}>멤버 정보 수정</TitleContainer>
        <FirstRow
          name={name}
          studentId={studentId}
          phone={phone}
          handleChangeMemberInfo={handleChangeMemberInfo}
        />
        <SecondRow
          department={department}
          email={email}
          handleChangeMemberInfo={handleChangeMemberInfo}
        />
        <ThirdRow
          discordUsername={discordUsername}
          nickname={nickname}
          handleChangeMemberInfo={handleChangeMemberInfo}
        />
        <StyledButton variant={"contained"} size="large">
          저장하기
        </StyledButton>
      </ModalContentContainer>
    </Modal>
  );
}

const ModalContentContainer = styled(Box)({
  width: "60%",
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
