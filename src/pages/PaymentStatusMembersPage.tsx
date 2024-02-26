import { useState } from "react";
import Header from "@/components/common/Header";
import PaymentStatusInfoTable from "@/components/common/Table/PaymentStatusInfoTable";
import Title from "@/components/common/Title";

export default function PaymentStatusMembersPage() {
  const [paymentStatusMemberSearchType, setPaymentStatusMemberSearchType] = useState("");
  const [paymentStatusMemberSearchText, setPaymentStatusMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"paymentStatus"} descriptionText={"회비 납부 여부 관리 설명"} />
      <Header variant={"paymentStatus"} setPaymentStatusMemberSearchType={setPaymentStatusMemberSearchType} setPaymentStatusMemberSearchText={setPaymentStatusMemberSearchText} />
      <PaymentStatusInfoTable
        paymentStatusMemberSearchType={paymentStatusMemberSearchType}
        paymentStatusMemberSearchText={paymentStatusMemberSearchText}
      />
    </>
  );
}
