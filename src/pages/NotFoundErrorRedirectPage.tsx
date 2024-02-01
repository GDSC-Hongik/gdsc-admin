import { Navigate } from "react-router-dom";
import RoutePath from "@routes/routePath";

export default function NotFoundErrorRedirectPage() {
  return <Navigate to={RoutePath.NotFoundError} />;
}
