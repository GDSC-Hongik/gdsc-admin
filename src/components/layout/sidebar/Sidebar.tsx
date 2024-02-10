import LogoIcon from "@assets/logo.svg?react";
import SidebarListButton from "@components/layout/sidebar/SidebarListButton";
import RoutePath from "@routes/routePath";
import { styled, Stack } from "@mui/material";

export default function Sidebar() {
  return (
    <Container>
      <LogoIcon style={{ alignSelf: "center" }} />
      <ListContainer>
        <SidebarListButton
          label="멤버 관리"
          pageList={[
            { label: "전체 멤버 관리", path: RoutePath.AllMembers },
            { label: "가입 대기 멤버 관리", path: RoutePath.PendingMembers },
          ]}
        />
        <SidebarListButton label="(예시) 전체 멤버 관리" path={RoutePath.AllMembers} />
      </ListContainer>
    </Container>
  );
}

const Container = styled(Stack)({
  width: "256px",
  minWidth: "256px",
  gap: "32px",
  paddingTop: "32px",
});

const ListContainer = styled(Stack)({
  overflow: "scroll",
  height: "100%",
  paddingBottom: "32px",
  padding: "0 8px",
});
