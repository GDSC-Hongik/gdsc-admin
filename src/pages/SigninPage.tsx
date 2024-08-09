import { Stack, styled } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import { GitHubButton } from "@/components/@common/GitHubButton";
import RoutePath from "@/routes/routePath";

export default function SigninPage() {
  const handleClick = () => {
    setTimeout(function () {
      document.location.href = RoutePath.GithubLoginRedirect;
    }, 250);
  };

  return (
    <StyledSigninContainer>
      <StyledButtonContainer gap="48px">
        <LogoIcon />
        <GitHubButton onClick={handleClick} />
      </StyledButtonContainer>
    </StyledSigninContainer>
  );
}

const StyledSigninContainer = styled("main")({
  width: "100%",
  height: "100vh",
  gap: "48px",
});

const StyledButtonContainer = styled(Stack)({
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});
