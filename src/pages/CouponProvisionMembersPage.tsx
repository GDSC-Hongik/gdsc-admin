import CouponProvisionMembersHeader from "@/components/common/Header/CouponProvisionMembersHeader";
import CouponProvisionMembersInfoTable from "@/components/common/Table/CouponProvisionMembersInfoTable";
import Title from "@/components/common/Title";

export default function CouponProvisionMembersPage() {
  return (
    <>
      <Title
        variant={"couponProvisionMembers"}
        descriptionText={"회원들에게 발급한 쿠폰을 확인하고 관리합니다."}
      />
      <CouponProvisionMembersHeader />
      <CouponProvisionMembersInfoTable />
    </>
  );
}
