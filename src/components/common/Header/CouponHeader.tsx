import styled from "@emotion/styled";
import { Stack, Button } from "@mui/material";
import { useCouponDispatchContext } from "@/hooks/contexts/useCouponContext";

export default function CouponHeader() {
  const { setModalOpen } = useCouponDispatchContext();

  const handleClickCreateCoupon = () => {
    setModalOpen(true);
  };

  return (
    <StyledHeaderWrapper>
      <StyledButton variant="contained" onClick={handleClickCreateCoupon}>
        쿠폰 생성
      </StyledButton>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledButton = styled(Button)({});
