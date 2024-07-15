import AllMembersHeader from "@/components/common/Header/AllMembersHeader";
import AllMembersInfoTable from "@/components/common/Table/AllMembersInfoTable";
import Title from "@/components/common/Title";
import AllMembersSearchInfoContextProvider from "@/contexts/AllMembersContext";

export default function AllMembersPage() {
  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
      <AllMembersSearchInfoContextProvider>
        <AllMembersHeader />
        <AllMembersInfoTable />
      </AllMembersSearchInfoContextProvider>
    </>
  );
}
