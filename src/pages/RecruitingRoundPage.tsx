import RecruitingRoundHeader from "@/components/common/Header/RecruitingRoundHeader";
import RecruitingRoundInfoTable from "@/components/common/Table/RecruitingRoundInfoTable";
import Title from "@/components/common/Title";

export default function RecruitingRoundPage() {
  return (
    <>
      <Title
        variant={"recruitingRound"}
        descriptionText={"매 학기 신청 받을 리크루팅을 관리합니다."}
      />
      <RecruitingRoundHeader />
      <RecruitingRoundInfoTable />
    </>
  );
}
