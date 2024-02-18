import { AllMemberInfoStateType } from "@types/entities/member";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import { Modal, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

type EditInfoModalProps = {
  isModalVisible: boolean;
  handleCloseModal: () => void;
};

export default function EditInfoModal({ isModalVisible, handleCloseModal }: EditInfoModalProps) {
  const [memberInfo, setMemberInfo] = useState<AllMemberInfoStateType>({
    name: "",
    studentId: "",
    phone: "",
    department: "",
    email: "",
    discordUsername: "",
    nickname: "",
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
        <TitleContainer>멤버 정보 수정</TitleContainer>
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
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "133.4%",
  marginBottom: "32px",
});

const StyledButton = styled(Button)({
  width: "316px",
  height: "63px",
});
