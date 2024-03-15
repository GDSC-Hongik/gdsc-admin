import { useEffect } from "react";
import { isEmpty } from "lodash";
import { useSearchParams } from "react-router-dom";
import useAuthStorage from "@/hooks/useAuthStorage";

const enum Params {
  AccessToken = "access",
  RefreshToken = "refresh",
}

export default function useAuthSuccessRedirectPage() {
  const { setAuthData } = useAuthStorage();

  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get(Params.AccessToken);
  const refreshToken = searchParams.get(Params.AccessToken);

  const isSuccess = !isEmpty(accessToken);

  useEffect(() => {
    setAuthData({ accessToken, refreshToken });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, refreshToken]);

  return { isSuccess };
}
