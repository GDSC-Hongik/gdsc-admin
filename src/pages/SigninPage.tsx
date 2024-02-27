import { Container, Stack } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import { GitHubButton } from "@/components/GitHubButton";
import { BASE_URL } from "@/environment";

/** 깃허브 로그인 및 가입하기 */
export default function SigninPage() {
  const handleClick = () => {
    setTimeout(function () {
      document.location.href = `${BASE_URL}/oauth2/authorization/github`;
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
