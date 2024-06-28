import { ChangeEvent, useState } from "react";
import { typo } from "@/styles/typo";
import styled from "@emotion/styled";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import useCreateCouponMutation from "@/hooks/mutations/useCreateCouponMutation";

type CouponModalPropsType = {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  defaultValue?: { name: string; discountAmount: number };
};

export default function CouponModal({
  open,
  onClose,
  isEdit = false,
  defaultValue,
}: CouponModalPropsType) {
  const [couponInfo, setCouponInfo] = useState(
    defaultValue ?? {
      name: "",
      discountAmount: null,
    },
  );

  const { mutate: createCouponMutate } = useCreateCouponMutation();

  const handleChangeCouponInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      [name]: value,
    }));
  };

  const handleClickSubmit = () => {
    if (isEdit) {
      return;
    }

    couponInfo.discountAmount && createCouponMutate(couponInfo);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle css={typo.h1}>{isEdit ? "쿠폰 수정" : "쿠폰 생성"}</StyledTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "311px",
          }}
        >
          <StyledInfoRow>
            <StyledInfoWrapper>
              <Typography css={typo.h6}>이름</Typography>
              <StyledTextField
                placeholder="이름"
                size="small"
                value={couponInfo.name}
                name="name"
                onChange={handleChangeCouponInfo}
              />
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <Typography css={typo.h6}>할인금액</Typography>
              <StyledTextField
                placeholder="금액"
                size="small"
                value={couponInfo.discountAmount}
                name="discountAmount"
                onChange={handleChangeCouponInfo}
              />
            </StyledInfoWrapper>
          </StyledInfoRow>
          <StyledButton size="large" variant="contained" onClick={handleClickSubmit}>
            {isEdit ? "수정하기" : "생성하기"}
          </StyledButton>
        </div>
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
  padding: "64px 172px 44px 172px",
  boxSizing: "border-box",
});

const StyledTitle = styled(Typography)({
  marginBottom: "39px",
});

const StyledInfoRow = styled(Box)({
  display: "flex",
  gap: "95px",
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "71px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",
  flex: 1,
}));

const StyledTextField = styled(TextField)({
  "width": "274px",

  ".MuiInputBase-root": {
    borderRadius: 0,
    border: "1px solid #BEC3CC",
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
});

const StyledButton = styled(Button)({
  width: "316px",
  height: "63px",
  marginTop: "auto",
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "26px",
  letterSpacing: "0.46px",
});
