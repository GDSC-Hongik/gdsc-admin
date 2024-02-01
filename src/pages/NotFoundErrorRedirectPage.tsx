import RoutePath from "@routes/routePath";
import { Navigate } from "react-router-dom";

export default function NotFoundErrorRedirectPage() {
  return <Navigate to={RoutePath.NotFoundError} />;
}
