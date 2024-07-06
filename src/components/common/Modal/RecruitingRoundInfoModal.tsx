import { Modal, styled } from "@mui/material";

export type RecruitingRoundInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  roundInfoList?: any;
};

export default function RecruitingRoundInfoModal({
  open,
  onClose,
  isEdit = false,
  roundInfoList,
}: RecruitingRoundInfoModalPropsType) {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper></StyledModalContentWrapper>
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
