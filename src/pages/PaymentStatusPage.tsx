import PaymentStatusHeader from "@/components/PaymentStatus/PaymentStatusHeader";
import PaymentStatusInfoTable from "@/components/PaymentStatus/PaymentStatusInfoTable";
import Title from "@/components/@common/Title";
import PaymentStatusContextProvider from "@/contexts/PaymentStatusContext";

export default function PaymentStatusPage() {
  return (
    <>
      <Title variant={"paymentStatus"} descriptionText={"회비 납부 관리 설명"} />
      <PaymentStatusContextProvider>
        <PaymentStatusHeader />
        <PaymentStatusInfoTable />
      </PaymentStatusContextProvider>
    </>
  );
}
