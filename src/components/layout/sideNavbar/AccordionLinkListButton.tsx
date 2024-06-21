import { MouseEvent, useState } from "react";
import { Typography } from "@mui/material";
import StarIcon from "@/assets/star.svg?react";
import DownArrowIcon from "@/assets/down-arrow.svg?react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import RoutePath from "@/routes/routePath";
import { typo } from "@/styles/typo";
import { palette } from "@/styles/palette";

export type LinkButtonPropsType = { label: string; path: string };
type LinkButtonLabelType = "정회원 관리" | "지난 학기 관리" | "회비 관리" | "활동기간 관리";

type AccordionLinkListButtonPropsType<T extends LinkButtonLabelType> = {
  label: T;
  linkButtonInfoList?: T extends "정회원 관리" | "회비 관리" ? LinkButtonPropsType[] : undefined;
  path?: T extends "지난 학기 관리" | "활동기간 관리" ? keyof typeof RoutePath : undefined;
};

export default function AccordionLinkListButton<T extends LinkButtonLabelType>({
  label,
  linkButtonInfoList,
  path,
}: AccordionLinkListButtonPropsType<T>) {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const handleClickLinkButton = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!path) {
      event.preventDefault();
    }

    setExpanded(prev => !prev);
  };

  return (
    <StyledAccordionLinkListButtonWrapper>
      <StyledLink to={path ?? ""} onClick={handleClickLinkButton}>
        <StarIcon />
        <StyledRightElement>
          <Typography css={typo.body1}>{label}</Typography>
          {!!linkButtonInfoList && <StyledDownArrowIcon expanded={expanded} />}
        </StyledRightElement>
      </StyledLink>
      {expanded && (
        <StyledLinkButtonInfoListWrapper>
          {linkButtonInfoList?.map(info => (
            <StyledLinkButtonInfoListItem key={info.label} isActive={pathname === info.path}>
              <StyledLinkButton to={info.path}>
                <StyledLinkLabel css={typo.body2}>{info.label}</StyledLinkLabel>
              </StyledLinkButton>
            </StyledLinkButtonInfoListItem>
          ))}
        </StyledLinkButtonInfoListWrapper>
      )}
    </StyledAccordionLinkListButtonWrapper>
  );
}

const StyledAccordionLinkListButtonWrapper = styled("li")({
  cursor: "pointer",
});

const StyledLink = styled(Link)({
  padding: "8px 16px",
  display: "flex",
  gap: "32px",
  boxSizing: "border-box",
  height: "50px",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: `${palette.primary}`,
});

const StyledRightElement = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flex: 1,
  cursor: "pointer",
});

const StyledDownArrowIcon = styled(DownArrowIcon)(({ expanded }: { expanded: boolean }) => ({
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
}));

const StyledLinkButtonInfoListWrapper = styled("ul")({ cursor: "pointer", padding: "0" });

const StyledLinkButtonInfoListItem = styled("li")(({ isActive }: { isActive: boolean }) => ({
  "listStyle": "none",
  "height": "36px",
  "width": "100%",
  "borderRadius": "4px",
  "display": "flex",
  "alignItems": "center",
  "backgroundColor": isActive ? "rgba(0, 0, 0, 0.04)" : "transparent",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const StyledLinkButton = styled(Link)({
  textDecoration: "none",
  color: `${palette.primary}`,
});

const StyledLinkLabel = styled(Typography)({
  marginLeft: "72px",
});