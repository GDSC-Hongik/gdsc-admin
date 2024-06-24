import Header from "@/components/common/Header";
import PendingMemberInfoTable from "@/components/common/Table/PendingMemberInfoTable";
import Title from "@/components/common/Title";
import PendingMembersSearchInfoContextProvider from "@/contexts/PendingMembersSearchInfoContext";

export default function PendingMembersPage() {
  return (
    <>
      <Title
        variant={"pendingMember"}
        descriptionText={"소셜 로그인을 완료한 멤버를 관리합니다. "}
      />
      <PendingMembersSearchInfoContextProvider>
        <Header variant={"pendingMember"} />
        <PendingMemberInfoTable />
      </PendingMembersSearchInfoContextProvider>
    </>
  );
}
