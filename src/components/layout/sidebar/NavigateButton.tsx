import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

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
  color: black;
  border-radius: 4px;
  padding: 13px 0px 13px 55px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background-color: #0000000a;
  }
  ${({ active }) =>
    active &&
    `
    background: #0000000A;
  `}
`;
