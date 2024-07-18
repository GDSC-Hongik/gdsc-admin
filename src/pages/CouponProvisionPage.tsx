import Title from "@/components/@common/Title";
import CouponProvisionHeader from "@/components/CouponProvision/CouponProvisionHeader";
import CouponProvisionInfoTable from "@/components/CouponProvision/CouponProvisionInfoTable";
import CouponProvisionContextProvider from "@/contexts/CouponProvisionContext";

export default function CouponProvisionPage() {
  return (
    <>
      <Title
        variant={"couponProvision"}
        descriptionText={"코어 멤버가 생성한 쿠폰을 지급합니다."}
      />
      <CouponProvisionContextProvider>
        <CouponProvisionHeader />
        <CouponProvisionInfoTable />
      </CouponProvisionContextProvider>
    </>
  );
}
