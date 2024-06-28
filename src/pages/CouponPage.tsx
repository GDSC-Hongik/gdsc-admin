import CouponHeader from "@/components/common/Header/CouponHeader";
import CouponInfoTable from "@/components/common/Table/CouponInfoTable";
import Title from "@/components/common/Title";
import CouponSearchInfoContextProvider from "@/contexts/CouponSearchInfoContext";

export default function CouponPage() {
  return (
    <>
      <Title variant={"coupon"} descriptionText={"쿠폰 관리 설명"} />
      <CouponSearchInfoContextProvider>
        <CouponHeader />
        <CouponInfoTable />
      </CouponSearchInfoContextProvider>
    </>
  );
}
