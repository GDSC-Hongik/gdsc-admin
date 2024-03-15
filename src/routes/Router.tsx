import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/layout/common/Layout";
import AllMembersPage from "@/pages/AllMembersPage";
import AuthErrorPage from "@/pages/AuthErrorPage";
import AuthSuccessRedirectPage from "@/pages/AuthSuccessRedirectPage";
import GrantableMembersPage from "@/pages/GrantableMembersPage";
import GrantedMembersPage from "@/pages/GrantedMembersPage";
import NotFoundErrorPage from "@/pages/NotFoundErrorPage";
import PaymentStatusMembersPage from "@/pages/PaymentStatusMembersPage";
import PendingMembersPage from "@/pages/PendingMembersPage";
import SigninPage from "@/pages/SigninPage";
import RoutePath from "@/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      { path: "", element: <Navigate to={RoutePath.AllMembers} replace /> },
      { path: RoutePath.AllMembers, element: <AllMembersPage /> },
      { path: RoutePath.GrantedMembers, element: <GrantedMembersPage /> },
      { path: RoutePath.PendingMembers, element: <PendingMembersPage /> },
      { path: RoutePath.GrantableMembers, element: <GrantableMembersPage /> },
      { path: RoutePath.PaymentStatusMembers, element: <PaymentStatusMembersPage /> },
    ],
  },
  { path: RoutePath.Signin, element: <SigninPage /> },
  {
    path: RoutePath.AuthorizedError,
    element: <AuthErrorPage />,
  },
  { path: RoutePath.AuthorizedSuccess, element: <AuthSuccessRedirectPage /> },
  { path: "*", element: <NotFoundErrorPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
