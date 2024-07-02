import styled from "@emotion/styled";
import { Modal } from "@mui/material";

type DetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  detailInfo: unknown;
};

export default function CouponProvisionModal({
  open,
  onClose,
  detailInfo,
}: DetailInfoModalPropsType) {
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
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "40px",
});
