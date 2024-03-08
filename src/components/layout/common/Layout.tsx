import { Button, Stack, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import ApiErrorBoundary from "@/components/layout/ApiErrorBoundary";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import useAuthStorage from "@/hooks/useAuthStorage";
import RoutePath from "@/routes/routePath";

export default function Layout() {
  const { isEmptyToken, clearAuthData } = useAuthStorage();

  if (isEmptyToken) {
    return <Navigate to={RoutePath.Signin} />;
  }

  const handleClickLogoutButton = () => {
    clearAuthData();
  }

  return (
    <ApiErrorBoundary>
      <Container>
        <Sidebar />
        <BodyContainer>
          <Button
              variant={'outlined'}
              onClick={handleClickLogoutButton}
              sx={{ marginLeft: 'auto' }}
            >
            로그아웃
          </Button>
          <Outlet />
        </BodyContainer>
      </Container>
    </ApiErrorBoundary>
  );
}

const Container = styled(Stack)({
  height: "100vh",
  width: "100vw",
  flexDirection: "row",
  margin: "-8px",
});

const BodyContainer = styled(Stack)({
  padding: "40px",
  width: "100%",
  overflow: "auto",
});
