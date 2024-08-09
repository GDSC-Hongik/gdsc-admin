import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { Params } from "@/constants/auth";
import useAuthStorage from "@/hooks/auth/useAuthStorage";
import RoutePath from "@/routes/routePath";

export const AuthServerRedirectPage = () => {
  const { setAuthData } = useAuthStorage();

  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get(Params.AccessToken);
  const refreshToken = searchParams.get(Params.AccessToken);

  useEffect(() => {
    setAuthData({ accessToken, refreshToken });
    sessionStorage.setItem("isLogin", "true");
  }, [accessToken, refreshToken, setAuthData]);

  return <Navigate to={RoutePath.Index} />;
};
