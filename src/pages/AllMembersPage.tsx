import Header from "@components/common/Header";
import AllMemberInfoTable from "@components/common/AllMemberInfoTable";
import Title from "@components/common/Title";
import { useState } from "react";

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
