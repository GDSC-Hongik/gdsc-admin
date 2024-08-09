import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  useEffect(() => {
    sessionStorage.setItem("isLogin", "true");
  }, []);

  return <Navigate to={RoutePath.Index} />;
};
