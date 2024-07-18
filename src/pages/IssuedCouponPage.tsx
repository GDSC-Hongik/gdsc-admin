import Title from "@/components/@common/Title";
import IssuedCouponHeader from "@/components/IssuedCoupon/IssuedCouponHeader";
import IssuedCouponInfoTable from "@/components/IssuedCoupon/IssuedCouponInfoTable";
import IssuedCouponContextProvider from "@/contexts/IssuedCouponContext";

export default function IssuedCouponPage() {
  return (
    <>
      <Title
        variant={"issuedCoupon"}
        descriptionText={"회원들에게 발급한 쿠폰을 확인하고 관리합니다."}
      />
      <IssuedCouponContextProvider>
        <IssuedCouponHeader />
        <IssuedCouponInfoTable />
      </IssuedCouponContextProvider>
    </>
  );
}
