import { styled, Stack } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
import SidebarListButton from "@/components/layout/sidebar/SidebarListButton";
import { memberPageList, paymentPageList } from "@/constants/common";

export default function Sidebar() {
  return (
    <Container>
      <LogoIcon style={{ alignSelf: "center" }} />
      <ListContainer>
        <SidebarListButton label="멤버 관리" pageList={memberPageList} />
        <SidebarListButton label="회비 납부 여부 관리" pageList={paymentPageList} />
      </ListContainer>
    </Container>
  );
}

const Container = styled(Stack)({
  width: "256px",
  minWidth: "256px",
  gap: "32px",
  paddingTop: "32px",
  boxShadow: `0 2px 3px #00000033, 0 1px 1px #00000033, 0 1px 2px #0000001E`,
});

const ListContainer = styled(Stack)({
  height: "100%",
  padding: "8px",
});
