import { PropsWithChildren } from "react";
import { Link, LinkProps, styled } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

type NavigateButtonProps = { path: string } & LinkProps;

export default function NavigateButton({
  path,
  children,
  sx,
  ...props
}: PropsWithChildren<NavigateButtonProps>) {
  const { pathname } = useLocation();
  const isActive = pathname === path || pathname.startsWith(path + "/");

  return (
    <Container to={path} {...props} sx={{ ...sx, ...navigateButtonStyles(isActive) }}>
      {children}
    </Container>
  );
}

const Container = styled(({ to, ...props }: LinkProps & { to: string }) => (
  <Link to={to} component={NavLink} {...props} />
))({
  "color": "black",
  "borderRadius": "4px",
  "padding": "13px 16px",
  "textDecoration": "none",
  ":hover": {
    backgroundColor: `#0000000A`,
  },
});

const navigateButtonStyles = (isActive?: boolean) => ({
  background: isActive ? `#0000000A` : "transparent",
});
