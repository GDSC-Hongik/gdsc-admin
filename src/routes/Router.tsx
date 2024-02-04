import Layout from "@components/layout/Layout";
import SigninPage from "@pages/SigninPage";
import AuthSuccessRedirectPage from "@pages/AuthSuccessRedirectPage";
import MemberPage from "@pages/MemberPage";
import NotFoundErrorPage from "@pages/NotFoundErrorPage";
import RoutePath from "@routes/routePath";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [{ index: true, element: <MemberPage /> }],
  },
  { path: RoutePath.Signin, element: <SigninPage /> },
  { path: RoutePath.AuthorizedSuccess, element: <AuthSuccessRedirectPage /> },
  { path: "*", element: <NotFoundErrorPage /> },
];

const Router = createBrowserRouter(routes);

export default Router;
