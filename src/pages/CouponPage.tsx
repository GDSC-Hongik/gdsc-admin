import CouponHeader from "@/components/common/Header/CouponHeader";
import CouponInfoTable from "@/components/common/Table/CouponInfoTable";
import Title from "@/components/common/Title";
import CouponSearchInfoContextProvider from "@/contexts/CouponSearchInfoContext";

export default function CouponPage() {
  return (
    <>
      <Title variant={"coupon"} descriptionText={"코어 멤버가 생성한 쿠폰을 관리합니다."} />
      <CouponSearchInfoContextProvider>
        <CouponHeader />
        <CouponInfoTable />
      </CouponSearchInfoContextProvider>
    </>
  );
}
