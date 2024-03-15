import Header from "@/components/common/Header";
import PaymentStatusInfoTable from "@/components/common/Table/PaymentStatusInfoTable";
import Title from "@/components/common/Title";

export default function PaymentStatusMembersPage() {
  return (
    <>
      <Title
        variant={"paymentStatus"}
        descriptionText={"가입 신청서를 작성한 게스트 멤버의 납입 여부를 관리합니다."}
      />
      <Header variant={"paymentStatus"} />
      <PaymentStatusInfoTable />
    </>
  );
}
