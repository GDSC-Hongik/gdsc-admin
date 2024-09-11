import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import Title from "@/components/@common/Title";
import AllMembersHeader from "@/components/AllMembers/AllMembersHeader";
import AllMembersInfoTable from "@/components/AllMembers/AllMembersInfoTable";
import AllMembersContextProvider from "@/contexts/AllMembersContext";
import useLogoutMutation from "@/hooks/mutations/useLogoutMutation";
import RoutePath from "@/routes/routePath";

export default async function AllMembersPage() {
  const navigate = useNavigate();
  const { mutate } = useLogoutMutation();

  const {
    member: { manageRole },
  } = await allMemberApi.getDashboardInfo();

  if (manageRole !== "ADMIN") {
    toast.error("어드민 권한이 없는 사용자입니다.");
    mutate();
    navigate(RoutePath.Signin);
  }

  return (
    <>
      <Title variant={"allMember"} descriptionText={"전체 커뮤니티 멤버 정보를 관리합니다."} />
      <AllMembersContextProvider>
        <AllMembersHeader />
        <AllMembersInfoTable />
      </AllMembersContextProvider>
    </>
  );
}
