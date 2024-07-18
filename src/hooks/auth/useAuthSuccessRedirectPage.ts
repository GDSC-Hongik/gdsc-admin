import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Params } from "@/constants/auth";
import useAuthStorage from "@/hooks/auth/useAuthStorage";

export default function useAuthSuccessRedirectPage() {
  const { setAuthData } = useAuthStorage();

  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get(Params.AccessToken);
  const refreshToken = searchParams.get(Params.AccessToken);

  const isSuccess = !!accessToken;

  useEffect(() => {
    setAuthData({ accessToken, refreshToken });
  }, [accessToken, refreshToken, setAuthData]);

  return { isSuccess };
}
