/**
 * 쿠키 이름을 기반으로 쿠키 값을 가져옴
 * @param {string} name 가져올 쿠키의 이름
 * @returns {string} 쿠키 값 (존재하지 않을 경우 빈 스트링('') 반환)
 */
export function getCookie(name: string): string {
  const cookieString: string = document.cookie;
  const cookies: string[] = cookieString.split(";");

  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split("=");
    if (cookieName === name) {
      return value;
    }
  }

  return "";
}

export function setCookie({ key, value }: { key: string; value: string }) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const cookieValue =
    encodeURIComponent(key) +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";
  document.cookie = cookieValue;
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
