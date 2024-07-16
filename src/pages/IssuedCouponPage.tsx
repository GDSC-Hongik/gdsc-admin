import IssuedCouponHeader from "@/components/common/Header/IssuedCouponHeader";
import IssuedCouponInfoTable from "@/components/common/Table/IssuedCouponInfoTable";
import Title from "@/components/common/Title";
import IssuedCouponSearchInfoContextProvider from "@/contexts/IssuedCouponSearchInfoContext";

export default function IssuedCouponPage() {
  return (
    <>
      <Title
        variant={"issuedCoupon"}
        descriptionText={"회원들에게 발급한 쿠폰을 확인하고 관리합니다."}
      />
      <IssuedCouponSearchInfoContextProvider>
        <IssuedCouponHeader />
        <IssuedCouponInfoTable />
      </IssuedCouponSearchInfoContextProvider>
    </>
  );
}
