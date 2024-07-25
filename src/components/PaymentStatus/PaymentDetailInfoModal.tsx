import { Button, Modal, styled, Typography } from "@mui/material";

type PaymentDetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
};

export default function PaymentDetailInfoModal({ open, onClose }: PaymentDetailInfoModalPropsType) {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>상세 결제 내역</StyledTitle>
        <Button variant="outlined" color="error">
          환불
        </Button>
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
