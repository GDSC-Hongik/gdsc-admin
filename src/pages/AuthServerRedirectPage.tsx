import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("isLogin", "true");
    navigate(RoutePath.Index);
  }, [navigate]);

  return null;
};
