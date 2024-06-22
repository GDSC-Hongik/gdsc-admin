import { styled, Stack } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import AccordionLinkListButton from "@/components/common/SideNavbar/AccordionLinkListButton";
import { membersLinkButtonInfoList, paymentLinkButtonInfoList } from "@/constants/sideNavbar";
import RoutePath from "@/routes/routePath";

export default function SideNavbar() {
  return (
    <StyledSideNavbarWrapper>
      <StyledLogoIcon />
      <StyledLinkWrapper>
        <AccordionLinkListButton
          label="정회원 관리"
          linkButtonInfoList={membersLinkButtonInfoList}
        />
        <AccordionLinkListButton label="지난 학기 관리" path={RoutePath.PastSemester} />
        <AccordionLinkListButton label="회비 관리" linkButtonInfoList={paymentLinkButtonInfoList} />
        <AccordionLinkListButton label="활동기간 관리" path={RoutePath.ActivityPeriod} />
      </StyledLinkWrapper>
    </StyledSideNavbarWrapper>
  );
}

const StyledSideNavbarWrapper = styled(Stack)({
  minWidth: "256px",
  gap: "32px",
  paddingTop: "32px",
  boxShadow: `0 2px 3px #00000033, 0 1px 1px #00000033, 0 1px 2px #0000001E`,
});

const StyledLogoIcon = styled(LogoIcon)({
  margin: "auto",
});

const StyledLinkWrapper = styled("ul")({
  height: "100%",
  padding: "8px",
});
