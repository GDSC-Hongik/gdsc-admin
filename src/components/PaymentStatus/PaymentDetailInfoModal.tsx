import { Box, Button, Modal, styled, Typography } from "@mui/material";

type PaymentDetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  selectedPaymentId: number;
};

const mockData = {
  version: "string",
  paymentKey: "string",
  type: "string",
  orderId: "string",
  orderName: "string",
  mId: "string",
  currency: "string",
  method: "string",
  totalAmount: 0,
  balanceAmount: 0,
  status: "string",
  requestedAt: "2024-07-27T07:46:02.798Z",
  approvedAt: "2024-07-27T07:46:02.798Z",
  useEscrow: true,
  lastTransactionKey: "string",
  suppliedAmount: 0,
  vat: 0,
  cultureExpense: true,
  taxFreeAmount: 0,
  taxExemtionAmount: 0,
  cancels: [
    {
      cancelAmount: 0,
      cancelReason: "string",
      taxFreeAmount: 0,
      refundableAmount: 0,
      easyPayDiscountAmount: 0,
      canceledAt: "2024-07-27T07:46:02.798Z",
      transactionKey: "string",
      receiptKey: "string",
      cancelStatus: "string",
      cancelRequestId: "string",
    },
  ],
  isPartialCancelable: true,
  card: {
    amount: 0,
    issuerCode: "string",
    acquirerCode: "string",
    number: "string",
    installmentPlanMonths: 0,
    approveNo: "string",
    useCardPoint: true,
    cardType: "string",
    ownerType: "string",
    acquireStatus: "string",
    isInterestFree: true,
    interestPayer: "string",
  },
  transfer: {
    bankCode: "string",
    settlementStatus: "string",
  },
  receipt: {
    url: "string",
  },
  checkout: {
    url: "string",
  },
  easyPay: {
    provider: "string",
    amount: 0,
    discountAmount: 0,
  },
  country: "string",
  failure: {
    code: "string",
    message: "string",
  },
  cashReceipt: {
    type: "string",
    receiptKey: "string",
    issueNumber: "string",
    receiptUrl: "string",
    amount: 0,
    taxFreeAmount: 0,
    taxExemptionAmount: 0,
  },
  cashReceipts: [
    {
      receiptKey: "string",
      orderId: "string",
      orderName: "string",
      type: "string",
      issueNumber: "string",
      receiptUrl: "string",
      businessNumber: "string",
      transactionType: "string",
      amount: 0,
      taxFreeAmount: 0,
      issueStatus: "string",
      failure: {},
      customerIdentityNumber: "string",
      requestedAt: "2024-07-27T07:46:02.798Z",
    },
  ],
};

export default function PaymentDetailInfoModal({
  open,
  onClose,
  selectedPaymentId,
}: PaymentDetailInfoModalPropsType) {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>상세 결제 내역</StyledTitle>
        <StyledContent>{renderPaymentInfo(mockData)}</StyledContent>
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
