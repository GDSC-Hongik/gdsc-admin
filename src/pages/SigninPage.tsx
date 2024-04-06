import { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import { GitHubButton } from "@/components/common/GitHubButton";
import RoutePath from "@/routes/routePath";
import { setCookie } from "@/utils/cookie";

export default function SigninPage() {
  const handleClick = () => {
    setTimeout(function () {
      document.location.href = RoutePath.GithubLoginRedirect;
    }, 250);
  };

  useEffect(() => {
    // 로그인을 위한 oauth-base-uri 쿠키 값 세팅
    setCookie({
      key: "oauth-base-uri",
      value: window.location.origin,
      encoding: false,
    });
  }, []);

  return (
    <Container component="main" sx={{ width: "100%", height: "100vh" }}>
      <Stack
        gap="48px"
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoIcon />
        <GitHubButton onClick={handleClick} />
      </Stack>
    </Container>
  );
}
