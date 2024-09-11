import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { allMemberApi } from "@/apis/allMemberApi";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManageRoleInfo = async () => {
      const {
        member: { manageRole },
      } = await allMemberApi.getDashboardInfo();

      if (manageRole === "ADMIN") {
        sessionStorage.setItem("isLogin", "true");
        return;
      }

      navigate(RoutePath.Signin);
    };

    fetchManageRoleInfo();
  }, [navigate]);

  return <Navigate to={RoutePath.Index} />;
};
