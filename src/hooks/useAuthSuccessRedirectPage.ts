import { useEffect } from "react";
import { isEmpty } from "lodash";
import { useSearchParams } from "react-router-dom";
import useAuthStorage from "@/hooks/useAuthStorage";

const enum Params {
  AccessToken = "access_token",
}

export default function useAuthSuccessPage() {
  const { setAuthData } = useAuthStorage();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get(Params.AccessToken);

  const isSuccess = !isEmpty(accessToken);

  useEffect(() => {
    if (isSuccess) {
      setAuthData({ accessToken });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isSuccess };
}
