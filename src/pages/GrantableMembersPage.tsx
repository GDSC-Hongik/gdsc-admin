import Header from "@/components/common/Header";
import GrantableMemberInfoTable from "@/components/common/Table/GrantableMemberInfoTable";
import Title from "@/components/common/Title";
import SelectedMemberContextProvider from "@/components/context/SelectedMemberContextProvider";

export default function GrantableMembersPage() {
  return (
    <SelectedMemberContextProvider>
      <Title variant={"grantableMember"} descriptionText={"승인 가능한 멤버 정보를 관리합니다."} />
      <Header variant={"grantableMember"} />
      <GrantableMemberInfoTable />
    </SelectedMemberContextProvider>
  );
}
