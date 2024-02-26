import { useState } from "react";
import Header from "@/components/common/Header";
import PendingMemberInfoTable from "@/components/common/Table/PendingMemberInfoTable";
import Title from "@/components/common/Title";
import { PendingMemberInfoType } from "@/types/entities/member";

export default function PendingMembersPage() {
  const [selectedMemberList, setSelectedMemberList] = useState<PendingMemberInfoType[]>([]);
  const [pendingMemberSearchType, setPendingMemberSearchType] = useState("");
  const [pendingMemberSearchText, setPendingMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"pendingMember"} descriptionText={"멤버 관리 설명"} />
      <Header
        variant={"pendingMember"}
        selectedMemberCount={selectedMemberList.length}
        selectedMemberList={selectedMemberList}
        setPendingMemberSearchType={setPendingMemberSearchType}
        setPendingMemberSearchText={setPendingMemberSearchText}
      />
      <PendingMemberInfoTable
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
        pendingMemberSearchType={pendingMemberSearchType}
        pendingMemberSearchText={pendingMemberSearchText}
      />
    </>
  );
}
