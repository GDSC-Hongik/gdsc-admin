import styled from "@emotion/styled";
import { Box, Modal } from "@mui/material";
import { DetailCouponInfoType } from "@/types/entities/coupon";

type DetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  detailInfo: DetailCouponInfoType;
};

export default function DetailInfoModal({ open, onClose, detailInfo }: DetailInfoModalPropsType) {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledInfoWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>학번</StyledInfoTitle>
            <div>{detailInfo.studentId}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>이름</StyledInfoTitle>
            <div>{detailInfo.name}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>전화번호</StyledInfoTitle>
            <div>{detailInfo.phone}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>쿠폰</StyledInfoTitle>
            <div>{detailInfo.couponName}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>할인 금액</StyledInfoTitle>
            <div>{detailInfo.discountAmount}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>사용일시</StyledInfoTitle>
            <div>{detailInfo.usedAt}</div>
          </StyledRowWrapper>
          <StyledRowWrapper>
            <StyledInfoTitle>사용여부</StyledInfoTitle>
            <div>{detailInfo.isUsed}</div>
          </StyledRowWrapper>
        </StyledInfoWrapper>
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
  justifyContent: "center",
  alignItems: "center",
});

const StyledInfoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  gap: "16px",
});

const StyledRowWrapper = styled(Box)({
  display: "flex",
  width: "fit-content",
  gap: "8px",
});

const StyledInfoTitle = styled("div")({
  color: "#888B91",
});
