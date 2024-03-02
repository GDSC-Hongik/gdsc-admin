import { useState } from "react";
import Header from "@/components/common/Header";
import GrantableMemberInfoTable from "@/components/common/Table/GrantableMemberInfoTable";
import Title from "@/components/common/Title";
import { GrantableMemberInfoType } from "@/types/entities/member";

export default function GrantableMembersPage() {
  const [selectedMemberList, setSelectedMemberList] = useState<GrantableMemberInfoType[]>([]);
  const [grantableMemberSearchType, setGrantableMemberSearchType] = useState("");
  const [grantableMemberSearchText, setGrantableMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"grantableMember"} descriptionText={"승인 가능한 멤버 정보를 관리합니다."} />
      <Header
        variant={"grantableMember"}
        selectedMemberCount={selectedMemberList.length}
        selectedMemberList={selectedMemberList}
        setGrantableMemberSearchType={setGrantableMemberSearchType}
        setGrantableMemberSearchText={setGrantableMemberSearchText}
      />
      <GrantableMemberInfoTable
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
        grantableMemberSearchType={grantableMemberSearchType}
        grantableMemberSearchText={grantableMemberSearchText}
      />
    </>
  )
}