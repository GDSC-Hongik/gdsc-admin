import Layout from "@components/layout/common/Layout";
import SigninPage from "@pages/SigninPage";
import AuthSuccessRedirectPage from "@pages/AuthSuccessRedirectPage";
import AllMembersPage from "@pages/AllMembersPage";
import NotFoundErrorPage from "@pages/NotFoundErrorPage";
import RoutePath from "@routes/routePath";
import PendingMembersPage from "@pages/PendingMembersPage";
import PaymentStatusPage from "@pages/PaymentStatusPage";
import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";

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
      { path: RoutePath.PaymentStatus, element: <PaymentStatusPage /> },
    ],
  },
  { path: RoutePath.Signin, element: <SigninPage /> },
  { path: RoutePath.AuthorizedSuccess, element: <AuthSuccessRedirectPage /> },
  { path: "*", element: <NotFoundErrorPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
