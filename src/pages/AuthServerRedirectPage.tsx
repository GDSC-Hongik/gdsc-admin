import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

      mutate();
      navigate(RoutePath.Signin);
    };

    fetchManageRoleInfo();
  }, [mutate, navigate]);

  return <Navigate to={RoutePath.Index} />;
};
