import PaymentStatusHeader from "@/components/common/Header/PaymentStatusHeader";
import PaymentStatusInfoTable from "@/components/common/Table/PaymentStatusInfoTable";
import Title from "@/components/common/Title";
import PaymentStatusSearchInfoContextProvider from "@/contexts/PaymentStatusSearchInfoContext";

export default function PaymentStatusPage() {
  return (
    <>
      <Title variant={"paymentStatus"} descriptionText={"회비 납부 관리 설명"} />
      <PaymentStatusSearchInfoContextProvider>
        <PaymentStatusHeader />
        <PaymentStatusInfoTable />
      </PaymentStatusSearchInfoContextProvider>
    </>
  );
}
