import { useState } from "react";
import Header from "@/components/common/Header";
import AllMemberInfoTable from "@/components/common/Table/AllMemberInfoTable";
import Title from "@/components/common/Title";

export default function AllMembersPage() {
  const [allMemberSearchType, setAllMemberSearchType] = useState("");
  const [allMemberSearchText, setAllMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
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
