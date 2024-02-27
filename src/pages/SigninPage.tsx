import { Container, Stack } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import { GitHubButton } from "@/components/GitHubButton";
import RoutePath from "@/routes/routePath";

/** 깃허브 로그인 및 가입하기 */
export default function SigninPage() {
  const handleClick = () => {
    setTimeout(function () {
      document.location.href = `${RoutePath.GithubLoginRedirect}?redirect-uri=${window.location.origin}`;
    }, 250);
  };

  return (
    <Container component="main" sx={{ width: "100vw", height: "100vh" }}>
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
