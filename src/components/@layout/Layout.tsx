import { Button, Stack, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import SideNavbar from "@/components/@common/SideNavbar";
import useLogoutMutation from "@/hooks/mutations/useLogoutMutation";
import RoutePath from "@/routes/routePath";

export default function Layout() {
  const { mutate } = useLogoutMutation();

  if (!sessionStorage.getItem("isLogin")) {
    return <Navigate to={RoutePath.Signin} />;
  }

  const handleClickLogout = () => {
    mutate();
  };

  return (
    <StyledLayoutWrapper>
      <SideNavbar />
      <StyledBodyWrapper>
        <Outlet />
        <StyledButton
          variant={"outlined"}
          size={"large"}
          color={"primary"}
          onClick={handleClickLogout}
        >
          로그아웃
        </StyledButton>
      </StyledBodyWrapper>
    </StyledLayoutWrapper>
  );
}

const StyledLayoutWrapper = styled(Stack)({
  minHeight: "100vh",
  flexDirection: "row",
  margin: "-8px",
  position: "relative",
  minWidth: "100%",
});

const StyledBodyWrapper = styled(Stack)({
  width: "956px",
  overflow: "auto",
  padding: "78px 80px",
});

const StyledButton = styled(Button)({
  height: "42px",
  padding: "8px 22px",
  marginTop: "57px",
  marginRight: 0,
  position: "absolute",
  top: 0,
  right: "80px",
});
