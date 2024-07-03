import RecruitingHeader from "@/components/common/Header/RecruitingHeader";
import Title from "@/components/common/Title";

export default function RecruitingPage() {
  return (
    <>
      <Title variant={"recruiting"} descriptionText={"매 학기 신청 받을 리크루팅을 관리합니다."} />
      <RecruitingHeader />
    </>
  );
}
