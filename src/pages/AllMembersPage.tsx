import Title from "@/components/@common/Title";
import AllMembersHeader from "@/components/AllMembers/AllMembersHeader";
import AllMembersInfoTable from "@/components/AllMembers/AllMembersInfoTable";
import AllMembersContextProvider from "@/contexts/AllMembersContext";

export default function AllMembersPage() {
  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
      <AllMembersContextProvider>
        <AllMembersHeader />
        <AllMembersInfoTable />
      </AllMembersContextProvider>
    </>
  );
}
