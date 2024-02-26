import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/layout/common/Layout";
import AllMembersPage from "@/pages/AllMembersPage";
import AuthSuccessRedirectPage from "@/pages/AuthSuccessRedirectPage";
import GrantableMembersPage from "@/pages/GrantableMembersPage";
import NotFoundErrorPage from "@/pages/NotFoundErrorPage";
import PaymentStatusMembersPage from "@/pages/PaymentStatusMembersPage";
import PendingMembersPage from "@/pages/PendingMembersPage";
import SigninPage from "@/pages/SigninPage";
import RoutePath from "@/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Navigate to={RoutePath.AllMembers} replace />,
  },
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      {
        path: RoutePath.AllMembers,
        element: <AllMembersPage />,
      },
      { path: RoutePath.PendingMembers, element: <PendingMembersPage /> },
      { path: RoutePath.GrantableMembers, element: <GrantableMembersPage /> },
      { path: RoutePath.PaymentStatusMembers, element: <PaymentStatusMembersPage /> },
    ],
  },
  { path: RoutePath.Signin, element: <SigninPage /> },
  { path: RoutePath.AuthorizedSuccess, element: <AuthSuccessRedirectPage /> },
  { path: "*", element: <NotFoundErrorPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
