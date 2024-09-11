import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import Title from "@/components/@common/Title";
import AllMembersHeader from "@/components/AllMembers/AllMembersHeader";
import AllMembersInfoTable from "@/components/AllMembers/AllMembersInfoTable";
import AllMembersContextProvider from "@/contexts/AllMembersContext";
import useLogoutMutation from "@/hooks/mutations/useLogoutMutation";
import RoutePath from "@/routes/routePath";

export default function AllMembersPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const { mutate } = useLogoutMutation();

  useEffect(() => {
    const fetchManageRoleInfo = async () => {
      const {
        member: { manageRole },
      } = await allMemberApi.getDashboardInfo();

      if (manageRole === "ADMIN") {
        setHasAccess(true);
      }
    };

    fetchManageRoleInfo();
  }, []);

  if (!hasAccess) {
    toast.error("어드민 권한이 없는 사용자입니다.");
    mutate();

    return <Navigate to={RoutePath.Signin} />;
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
