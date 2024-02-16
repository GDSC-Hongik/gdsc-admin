import Header from "@components/common/Header";
import Title from "@components/common/Title";

export default function PendingMembersPage() {
  return (
    <>
      <Title variant={"pendingMember"} descriptionText={"멤버 관리 설명"} />
      <Header variant={"pendingMember"} />
    </>
  );
}
