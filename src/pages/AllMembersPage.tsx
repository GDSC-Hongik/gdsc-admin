import { useState } from "react";
import AllMemberInfoTable from "@/components/common/AllMemberInfoTable";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";

export default function AllMembersPage() {
  const [allMemberSearchType, setAllMemberSearchType] = useState("");
  const [allMemberSearchText, setAllMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"allMember"} descriptionText={"멤버 관리 설명"} />
      <Header
        variant={"allMember"}
        setAllMemberSearchType={setAllMemberSearchType}
        setAllMemberSearchText={setAllMemberSearchText}
      />
      <AllMemberInfoTable
        allMemberSearchType={allMemberSearchType}
        allMemberSearchText={allMemberSearchText}
      />
    </>
  );
}
