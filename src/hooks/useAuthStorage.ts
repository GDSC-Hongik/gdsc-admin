import { useCallback, useState } from "react";

export default function useAuthStorage() {
  // Todo: Use zustand
  const [token, setToken] = useState<string | null>("");

  const isEmptyToken = token?.length === 0;

  function setAuthData({ accessToken }: { accessToken: string | null }) {
    setToken(accessToken);
  }

  const clear = useCallback(() => {
    if (isEmptyToken) {
      return;
    }
    setToken(null);
  }, [isEmptyToken, setToken]);

  return { token, isEmptyToken, setAuthData, clear };
}
