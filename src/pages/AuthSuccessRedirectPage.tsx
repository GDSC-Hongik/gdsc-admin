import { Navigate } from "react-router-dom";
import RoutePath from "@routes/routePath";
import useAuthSuccessPage from "@hooks/useAuthSuccessRedirectPage";

export default function AuthSuccessRedirectPage() {
  const { isSuccess } = useAuthSuccessPage();

  return <Navigate to={isSuccess ? RoutePath.Index : RoutePath.AuthorizedError} />;
}
