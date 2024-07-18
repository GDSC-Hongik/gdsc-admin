import Title from "@/components/@common/Title";
import RecruitmentHeader from "@/components/Recruitment/RecruitmentHeader";
import RecruitmentInfoTable from "@/components/Recruitment/RecruitmentInfoTable";
import RecruitmentContextProvider from "@/contexts/RecruitmentContext";

export default function RecruitmentPage() {
  return (
    <>
      <Title variant={"recruitment"} descriptionText={"매 학기 신청 받을 리크루팅을 관리합니다."} />
      <RecruitmentContextProvider>
        <RecruitmentHeader />
        <RecruitmentInfoTable />
      </RecruitmentContextProvider>
    </>
  );
}
