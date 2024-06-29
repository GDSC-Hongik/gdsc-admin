import CouponProvisionHeader from "@/components/common/Header/CouponProvisionHeader";
import CouponProvisionInfoTable from "@/components/common/Table/CouponProvisionInfoTable";
import Title from "@/components/common/Title";

export default function CouponProvisionMembersPage() {
  return (
    <>
      <Title variant={"couponProvision"} descriptionText={"발급된 쿠폰 관리 설명"} />
      <CouponProvisionHeader />
      <CouponProvisionInfoTable />
    </>
  );
}
