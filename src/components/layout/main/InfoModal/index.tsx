import FirstRow from "./EditInfoModal/FirstRow";
import SecondRow from "./EditInfoModal/SecondRow";
import ThirdRow from "./EditInfoModal/ThirdRow";
import { Modal, Box, Button } from "@mui/material";
import styled from "@emotion/styled";

type InfoModalProps = {
  isModalVisible: boolean;
  handleCloseModal: () => void;
};

export default function InfoModal({ isModalVisible, handleCloseModal }: InfoModalProps) {
  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer>멤버 정보 수정</TitleContainer>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
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
  fontSize: "36px",
  fontWeight: "400",
  lineHeight: "133.4%",
  marginBottom: "32px",
});

const StyledButton = styled(Button)({
  width: "316px",
  height: "63px",
});
