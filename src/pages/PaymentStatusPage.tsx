import Header from "@components/common/Header";
import PaymentStatusInfoTable from "@components/common/PaymentStatusInfoTable";
import Title from "@components/common/Title";

export default function PaymentStatusPage() {
  return (
    <>
      <Title variant={"paymentStatus"} descriptionText={"회비 납부 여부 관리 설명"} />
      <Header variant={"paymentStatus"} />
      <PaymentStatusInfoTable />
    </>
  );
}
