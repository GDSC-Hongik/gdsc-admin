import CouponProvisionHeader from "@/components/common/Header/CouponProvisionHeader";
import CouponProvisionInfoTable from "@/components/common/Table/CouponProvisionInfoTable";
import Title from "@/components/common/Title";
import CouponProvisionSearchInfoContextProvider from "@/contexts/CouponProvisionContext";

export default function CouponProvisionPage() {
  return (
    <>
      <Title
        variant={"couponProvision"}
        descriptionText={"코어 멤버가 생성한 쿠폰을 지급합니다."}
      />
      <CouponProvisionSearchInfoContextProvider>
        <CouponProvisionHeader />
        <CouponProvisionInfoTable />
      </CouponProvisionSearchInfoContextProvider>
    </>
  );
}
