import IssuedCouponHeader from "@/components/common/Header/IssuedCouponHeader";
import IssuedCouponInfoTable from "@/components/common/Table/IssuedCouponInfoTable";
import Title from "@/components/common/Title";
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
