import { ChangeEvent, useState } from "react";
import { Box, Button, Modal, styled, TextField, Typography } from "@mui/material";
import useCancelPaymentMutation from "@/hooks/mutations/useCancelPaymentMutation";
import useGetPaymentDetailInfoQuery from "@/hooks/queries/useGetPaymentDetailInfoQuery";
import { typo } from "@/styles/typo";

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
  const [cancelReason, setCancelReason] = useState("");

  const { paymentDetailInfo } = useGetPaymentDetailInfoQuery(selectedPaymentId);

  const { mutate } = useCancelPaymentMutation();

  const handleChangeCancelReason = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCancelReason(e.target.value);
  };

  const handleClickCancel = () => {
    mutate({ orderId: selectedPaymentId, cancelReason });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>상세 결제 내역</StyledTitle>
        <StyledContent>
          <StyledPaymentWrapper>{renderPaymentInfo(paymentDetailInfo)}</StyledPaymentWrapper>
          <StyledTextFieldWrapper>
            <StyledText css={typo.body2}>결제 취소 사유</StyledText>
            <StyledTextField
              placeholder="결제 취소 사유"
              size="small"
              value={cancelReason}
              name="cancelReason"
              onChange={handleChangeCancelReason}
            />
          </StyledTextFieldWrapper>
        </StyledContent>
        <Button variant="outlined" color="error" onClick={handleClickCancel}>
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "440px",
  alignItems: "center",
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

const StyledText = styled(Typography)({
  color: "#6B6B6B",
});

const StyledPaymentWrapper = styled("div")({
  overflow: "auto",
  height: "311px",
});

const StyledTextFieldWrapper = styled("div")({
  width: "289px",
  height: "89px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
