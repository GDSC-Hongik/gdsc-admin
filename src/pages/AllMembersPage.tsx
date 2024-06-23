import Header from "@/components/common/Header";
import AllMemberInfoTable from "@/components/common/Table/AllMemberInfoTable";
import Title from "@/components/common/Title";
import { SearchVariantType } from "@/types/entities/search";
import { useState } from "react";

export default function AllMembersPage() {
  const [searchText, setSearchText] = useState("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType<"allMember">>("studentId");
  const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
      <Header
        variant={"allMember"}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchVariant={setSearchVariant}
        onResetPage={handleResetPage}
      />
      <AllMemberInfoTable
        searchText={searchText}
        searchVariant={searchVariant}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </>
  );
}
