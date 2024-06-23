import Header from "@/components/common/Header";
import AllMemberInfoTable from "@/components/common/Table/AllMemberInfoTable";
import Title from "@/components/common/Title";
import { SearchVariantType } from "@/types/entities/search";
import { useState } from "react";

export default function AllMembersPage() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType<"allMember">>("studentId");

  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
      <Header
        variant={"allMember"}
        allMemberSearchText={searchText}
        setAllMemberSearchText={setSearchText}
        setAllMemberSearchVariant={setSearchVariant}
      />
      <AllMemberInfoTable searchText={searchText} searchVariant={searchVariant} />
    </>
  );
}
