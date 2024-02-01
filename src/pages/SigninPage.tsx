import useAuthStorage from "@hooks/useAuthStorage";
import { useEffect } from "react";

export default function SigninPage() {
  const { clearToken } = useAuthStorage();

  useEffect(() => {
    clearToken();
  }, []);

  return <>SigninPage</>;
}
