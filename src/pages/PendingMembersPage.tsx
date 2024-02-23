import { useState } from "react";
import Header from "@/components/common/Header";
import PendingMemberInfoTable from "@/components/common/PendingMemberInfoTable";
import Title from "@/components/common/Title";
import { PendingMemberInfoType } from "@/types/entities/member";

export default function PendingMembersPage() {
  const [selectedMemberList, setSelectedMemberList] = useState<PendingMemberInfoType[]>([]);

  return (
    <>
      <Title variant={"pendingMember"} descriptionText={"멤버 관리 설명"} />
      <Header
        variant={"pendingMember"}
        selectedMemberCount={selectedMemberList.length}
        selectedMemberList={selectedMemberList}
      />
      <PendingMemberInfoTable
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
      />
    </>
  );
}
