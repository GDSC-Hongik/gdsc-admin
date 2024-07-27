import { Box, Button, Modal, styled, Typography } from "@mui/material";
import useGetPaymentDetailInfoQuery from "@/hooks/queries/useGetPaymentDetailInfoQuery";

type PaymentDetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  selectedPaymentId: number;
};

export default function PaymentDetailInfoModal({
  open,
  onClose,
  selectedPaymentId,
}: PaymentDetailInfoModalPropsType) {
  const { paymentDetailInfo } = useGetPaymentDetailInfoQuery(selectedPaymentId);

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>상세 결제 내역</StyledTitle>
        <StyledContent>{renderPaymentInfo(paymentDetailInfo)}</StyledContent>
        <Button variant="outlined" color="error">
          환불
        </Button>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const renderPaymentInfo = (value: string | number | Array<unknown> | object, level = 0) => {
  if (Array.isArray(value)) {
    return (
      <StyledPaymentInfoWrapper>
        {value.map((item, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {renderPaymentInfo(item, level)}
          </div>
        ))}
      </StyledPaymentInfoWrapper>
    );
  } else if (typeof value === "object" && value !== null) {
    return (
      <StyledPaymentInfoWrapper>
        {Object.entries(value).map(([key, val]) => (
          <StyledPaymentKeyValueWrapper key={key}>
            <StyledPaymentKeyWrapper>{key}:</StyledPaymentKeyWrapper>
            {renderPaymentInfo(val, level + 1)}
          </StyledPaymentKeyValueWrapper>
        ))}
      </StyledPaymentInfoWrapper>
    );
  } else {
    return <span>{value?.toString()}</span>;
  }
};

const StyledModalContentWrapper = styled("main")({
  width: "988px",
  height: "640px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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

const StyledContent = styled(Box)({
  maxHeight: "410px",
  overflow: "auto",
});

const StyledPaymentInfoWrapper = styled("div")({ marginTop: "10px" });

const StyledPaymentKeyValueWrapper = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "5px",
});

const StyledPaymentKeyWrapper = styled("strong")({
  width: "145px",
  marginRight: "50px",
});
