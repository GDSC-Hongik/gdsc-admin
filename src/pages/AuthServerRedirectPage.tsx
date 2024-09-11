import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import useLogoutMutation from "@/hooks/mutations/useLogoutMutation";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  const navigate = useNavigate();
  const { mutate } = useLogoutMutation();

  useEffect(() => {
    const fetchManageRoleInfo = async () => {
      const {
        member: { manageRole },
      } = await allMemberApi.getDashboardInfo();

      if (manageRole === "ADMIN") {
        sessionStorage.setItem("isLogin", "true");
        return;
      }

      toast.error("어드민 권한이 없는 사용자입니다.");
      mutate();
      navigate(RoutePath.Signin);
    };

    fetchManageRoleInfo();
  }, [mutate, navigate]);

  return <Navigate to={RoutePath.Index} />;
};
