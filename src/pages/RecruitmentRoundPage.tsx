import RecruitmentRoundHeader from "@/components/common/Header/RecruitmentRoundHeader";
import RecruitmentRoundInfoTable from "@/components/common/Table/RecruitmentRoundInfoTable";
import Title from "@/components/common/Title";
import RecruitmentRoundContextProvider from "@/contexts/RecruitmentRoundContext";

export default function RecruitmentRoundPage() {
  return (
    <>
      <Title
        variant={"recruitmentRound"}
        descriptionText={"매 학기 신청 받을 리크루팅을 관리합니다."}
      />
      <RecruitmentRoundContextProvider>
        <RecruitmentRoundHeader />
        <RecruitmentRoundInfoTable />
      </RecruitmentRoundContextProvider>
    </>
  );
}
