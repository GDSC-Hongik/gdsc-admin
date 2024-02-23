import useTokenStore from "@/store/token";

export default function useAuthStorage() {
  const { token, setToken, clearToken } = useTokenStore();

  const isEmptyToken = token?.length === 0;

  function setAuthData({ accessToken }: { accessToken: string | null }) {
    accessToken ? setToken(accessToken) : clearToken();
  }

  return { token, isEmptyToken, setAuthData, clearToken };
}
