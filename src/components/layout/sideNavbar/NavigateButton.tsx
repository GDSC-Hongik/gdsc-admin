import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { theme } from "@/styles/theme";

type NavigateButtonProps = { path: string };

export default function NavigateButton({ path, children }: PropsWithChildren<NavigateButtonProps>) {
  const { pathname } = useLocation();
  const isActive = Number(pathname === path || pathname.startsWith(path + "/"));

  return (
    <LinkButton to={path} active={isActive}>
      {children}
    </LinkButton>
  );
}

const LinkButton = styled(Link)<{ active: number }>`
  ${theme.typo.body3};
  color: black;
  border-radius: 4px;
  padding: 13px 0px 13px 55px;
  text-decoration: none;
  &:hover {
    background-color: ${theme.palette.black1};
  }
  ${({ active }) =>
    active &&
    `
    background: ${theme.palette.black1};
  `}
`;
