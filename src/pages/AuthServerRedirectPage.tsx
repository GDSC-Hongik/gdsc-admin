import { Navigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  sessionStorage.setItem("isLogin", "true");

  return <Navigate to={RoutePath.Index} />;
};
