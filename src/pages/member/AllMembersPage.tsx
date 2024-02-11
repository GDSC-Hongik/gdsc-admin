import Header from "@components/layout/main/Header";
import Table from "@components/layout/main/InfoTable";
import Title from "@components/layout/main/Title";

export default function AllMembersPage() {
  return (
    <>
      <Title variant={"allMember"} descriptionText={"멤버 관리 설명"} />
      <Header />
      <Table />
    </>
  );
}
