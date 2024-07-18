import { Button, ButtonProps, styled } from "@mui/material";
import GitHubIcon from "@/assets/github.svg?react";
import { theme } from "@/styles/theme";

export const GitHubButton = (props: ButtonProps) => {
  return (
    <StyledButton variant="contained" startIcon={<GitHubIcon />} {...props}>
      GitHub 로그인/회원가입
    </StyledButton>
  );
};

const StyledButton = styled(Button)({
  "padding": "12px 0",
  "width": "400px",
  "borderRadius": "100px",
  "gap": "8px",
  "backgroundColor": theme.palette.black,
  "color": theme.palette.white1,
  ":hover": {
    backgroundColor: theme.palette.gray8,
  },
});
