import PendingMembersHeader from "@/components/common/Header/PendingMembersHeader";
import PendingMembersInfoTable from "@/components/common/Table/PendingMembersInfoTable";
import Title from "@/components/common/Title";
import PendingMembersContextProvider from "@/contexts/PendingMembersContext";

export default function PendingMembersPage() {
  return (
    <>
      <Title
        variant={"pendingMember"}
        descriptionText={"소셜 로그인을 완료한 멤버를 관리합니다. "}
      />
      <PendingMembersContextProvider>
        <PendingMembersHeader />
        <PendingMembersInfoTable />
      </PendingMembersContextProvider>
    </>
  );
}
