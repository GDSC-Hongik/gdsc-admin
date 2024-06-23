import { useState } from "react";
import Header from "@/components/common/Header";
import PendingMemberInfoTable from "@/components/common/Table/PendingMemberInfoTable";
import Title from "@/components/common/Title";
import { MemberVariantType, SearchVariantType } from "@/types/entities/search";

export default function PendingMembersPage() {
  const [searchText, setSearchText] = useState("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType<"allMember">>("studentId");
  const [memberVariant, setMemberVariant] = useState<MemberVariantType>("associate");
  const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  return (
    <>
      <Title
        variant={"pendingMember"}
        descriptionText={"소셜 로그인을 완료한 멤버를 관리합니다. "}
      />
      <Header
        variant={"pendingMember"}
        setSearchText={setSearchText}
        setSearchVariant={setSearchVariant}
        setMemberVariant={setMemberVariant}
        searchText={searchText}
        onResetPage={handleResetPage}
      />
      <PendingMemberInfoTable
        searchVariant={searchVariant}
        searchText={searchText}
        memberVariant={memberVariant}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </>
  );
}
