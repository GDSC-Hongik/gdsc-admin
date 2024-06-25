import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AllMembersPage from "@/pages/AllMembersPage";
import AuthErrorPage from "@/pages/AuthErrorPage";
import AuthSuccessRedirectPage from "@/pages/AuthSuccessRedirectPage";
import CouponPage from "@/pages/CouponPage";
import CouponProvisionMembersPage from "@/pages/CouponProvisionMembersPage";
import CouponProvisionPage from "@/pages/CouponProvisionPage";
import NotFoundErrorPage from "@/pages/NotFoundErrorPage";
import PaymentStatusPage from "@/pages/AllMemberHistoryPerSemester";
import PendingMembersPage from "@/pages/PendingMembersPage";
import SigninPage from "@/pages/SigninPage";
import RoutePath from "@/routes/routePath";
import RecruitingPage from "@/pages/RecruitingPage";
import AllMemberHistoryPerSemesterPage from "@/pages/AllMemberHistoryPerSemester";
import PaymentStatusHistoryPerSemesterPage from "@/pages/PaymentStatusHistoryPerSemesterPage";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      { path: "", element: <Navigate to={RoutePath.AllMembers} replace /> },
      { path: RoutePath.PendingMembers, element: <PendingMembersPage /> },
      { path: RoutePath.PaymentStatus, element: <PaymentStatusPage /> },
      { path: RoutePath.Coupon, element: <CouponPage /> },
      { path: RoutePath.CouponProvisionMembers, element: <CouponProvisionMembersPage /> },
      { path: RoutePath.CouponProvision, element: <CouponProvisionPage /> },
      { path: RoutePath.Recruiting, element: <RecruitingPage /> },
      { path: RoutePath.AllMemberHistoryPerSemester, element: <AllMemberHistoryPerSemesterPage /> },
      {
        path: RoutePath.PaymentStatusHistoryPerSemester,
        element: <PaymentStatusHistoryPerSemesterPage />,
      },
    ],
  },
  {
    path: RoutePath.AllMembers,
    element: <Layout isAllMember />,
    children: [{ path: RoutePath.AllMembers, element: <AllMembersPage /> }],
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
