import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";

const enum CookieKeys {
  AccessToken = "accessToken",
  RefreshToken = "refreshToken",
}

export default function useAuthStorage() {
  const accessToken = getCookie(CookieKeys.AccessToken);
  const refreshToken = getCookie(CookieKeys.RefreshToken);

  function clearAuthData() {
    deleteCookie(CookieKeys.AccessToken);
    deleteCookie(CookieKeys.RefreshToken);
  }

  function setAuthData({
    accessToken,
    refreshToken,
  }: {
    accessToken: string | null;
    refreshToken: string | null;
  }) {
    if (accessToken && refreshToken) {
      setCookie({ key: CookieKeys.AccessToken, value: accessToken });
      setCookie({ key: CookieKeys.RefreshToken, value: refreshToken });
    }
  }

  return { accessToken, refreshToken, setAuthData, clearAuthData };
}
