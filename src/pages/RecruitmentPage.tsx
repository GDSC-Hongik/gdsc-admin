import RecruitmentHeader from "@/components/common/Header/RecruitmentHeader";
import RecruitmentInfoTable from "@/components/common/Table/RecruitmentInfoTable";
import Title from "@/components/common/Title";
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
