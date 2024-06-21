import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/layout/common/Layout";
import AllMembersPage from "@/pages/AllMembersPage";
import AuthErrorPage from "@/pages/AuthErrorPage";
import AuthSuccessRedirectPage from "@/pages/AuthSuccessRedirectPage";
import NotFoundErrorPage from "@/pages/NotFoundErrorPage";
import SigninPage from "@/pages/SigninPage";
import RoutePath from "@/routes/routePath";
import PendingMembersPage from "@/pages/PendingMembersPage";
import PastSemesterPage from "@/pages/PastSemesterPage";
import PaymentStatusPage from "@/pages/PaymentStatusPage";
import CouponPage from "@/pages/CouponPage";
import CouponProvisionMembersPage from "@/pages/CouponProvisionMembersPage";
import CouponProvisionPage from "@/pages/CouponProvisionPage";
import ActivityPeriodPage from "@/pages/ActivityPeriodPage";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      { path: RoutePath.Index, element: <Navigate to={RoutePath.AllMembers} replace /> },
      { path: RoutePath.AllMembers, element: <AllMembersPage /> },
      { path: RoutePath.PendingMembers, element: <PendingMembersPage /> },
      { path: RoutePath.PastSemester, element: <PastSemesterPage /> },
      { path: RoutePath.PaymentStatus, element: <PaymentStatusPage /> },
      { path: RoutePath.Coupon, element: <CouponPage /> },
      { path: RoutePath.CouponProvisionMembers, element: <CouponProvisionMembersPage /> },
      { path: RoutePath.CouponProvision, element: <CouponProvisionPage /> },
      { path: RoutePath.ActivityPeriod, element: <ActivityPeriodPage /> },
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
