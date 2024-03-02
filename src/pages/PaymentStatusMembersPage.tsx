import { useState } from "react";
import Header from "@/components/common/Header";
import PaymentStatusInfoTable from "@/components/common/Table/PaymentStatusInfoTable";
import Title from "@/components/common/Title";

export default function PaymentStatusMembersPage() {
  const [paymentStatusMemberSearchType, setPaymentStatusMemberSearchType] = useState("");
  const [paymentStatusMemberSearchText, setPaymentStatusMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"paymentStatus"} descriptionText={"가입 신청서를 작성한 게스트 멤버의 납입 여부를 관리합니다."} />
      <Header variant={"paymentStatus"} setPaymentStatusMemberSearchType={setPaymentStatusMemberSearchType} setPaymentStatusMemberSearchText={setPaymentStatusMemberSearchText} />
      <PaymentStatusInfoTable
        paymentStatusMemberSearchType={paymentStatusMemberSearchType}
        paymentStatusMemberSearchText={paymentStatusMemberSearchText}
      />
    </>
  );
}
