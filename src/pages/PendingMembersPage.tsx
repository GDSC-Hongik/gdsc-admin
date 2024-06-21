import Header from "@/components/common/Header";
import Title from "@/components/common/Title";

export default function PendingMembersPage() {
  return (
    <>
      <Title
        variant={"pendingMember"}
        descriptionText={"가입 신청서를 작성한 게스트 멤버의 정보를 관리합니다."}
      />
      <Header variant={"pendingMember"} />
    </>
  );
}
