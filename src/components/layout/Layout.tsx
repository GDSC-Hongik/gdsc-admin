import { Button, Stack, styled } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiErrorBoundary from "@/components/common/ApiErrorBoundary";
import SideNavbar from "@/components/common/SideNavbar";
import useAuthStorage from "@/hooks/useAuthStorage";
import RoutePath from "@/routes/routePath";

type LayoutPropsType = { isAllMember?: boolean };

export default function Layout({ isAllMember = false }: LayoutPropsType) {
  const { clearAuthData } = useAuthStorage();
  const navigate = useNavigate();

  // if (isEmptyToken) {
  //   return <Navigate to={RoutePath.Signin} />;
  // }

  const handleClickLogout = () => {
    clearAuthData();
    toast.success("로그아웃 성공");
    navigate(RoutePath.Signin);
  };

  return (
    <ApiErrorBoundary>
      <StyledLayoutWrapper>
        <SideNavbar />
        <StyledBodyWrapper>
          <Outlet />
          {isAllMember && (
            <StyledButton
              variant={"outlined"}
              size={"large"}
              color={"primary"}
              onClick={handleClickLogout}
            >
              로그아웃
            </StyledButton>
          )}
        </StyledBodyWrapper>
      </StyledLayoutWrapper>
    </ApiErrorBoundary>
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
  width: "fit-content",
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
