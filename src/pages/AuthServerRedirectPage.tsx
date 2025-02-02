import { Navigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

const AuthServerRedirectPage = () => {
  sessionStorage.setItem("isLogin", "true");

  return <Navigate to={RoutePath.Index} />;
};

export default AuthServerRedirectPage;
