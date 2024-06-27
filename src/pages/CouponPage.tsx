import CouponHeader from "@/components/common/Header/CouponHeader";
import Title from "@/components/common/Title";

export default function CouponPage() {
  return (
    <>
      <Title variant={"coupon"} descriptionText={"쿠폰 관리 설명"} />
      <CouponHeader />
    </>
  );
}
