import { Navigate } from "react-router-dom";
import useAuthSuccessPage from "@/hooks/useAuthSuccessRedirectPage";
import RoutePath from "@/routes/routePath";

export default function AuthSuccessRedirectPage() {
  const { isSuccess } = useAuthSuccessPage();

  return <Navigate to={isSuccess ? RoutePath.Index : RoutePath.AuthorizedError} />;
}
