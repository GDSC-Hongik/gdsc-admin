import { Navigate } from "react-router-dom";
import useAuthSuccessRedirectPage from "@/hooks/auth/useAuthSuccessRedirectPage";
import RoutePath from "@/routes/routePath";

export default function AuthSuccessRedirectPage() {
  const { isSuccess } = useAuthSuccessRedirectPage();

  return <Navigate to={isSuccess ? RoutePath.Index : RoutePath.Signin} />;
}
