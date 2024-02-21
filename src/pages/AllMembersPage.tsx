import Header from "@components/common/Header";
import AllMemberInfoTable from "@components/common/AllMemberInfoTable";
import Title from "@components/common/Title";

export default function AllMembersPage() {
  return (
    <>
      <Title variant={"allMember"} descriptionText={"멤버 관리 설명"} />
      <Header variant={"allMember"} />
      <AllMemberInfoTable />
    </>
  );
}
