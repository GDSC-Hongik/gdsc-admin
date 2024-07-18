import Title from "@/components/@common/Title";
import CouponHeader from "@/components/Coupon/CouponHeader";
import CouponInfoTable from "@/components/Coupon/CouponInfoTable";
import CouponContextProvider from "@/contexts/CouponContext";

export default function CouponPage() {
  return (
    <>
      <Title variant={"coupon"} descriptionText={"코어 멤버가 생성한 쿠폰을 관리합니다."} />
      <CouponContextProvider>
        <CouponHeader />
        <CouponInfoTable />
      </CouponContextProvider>
    </>
  );
}
