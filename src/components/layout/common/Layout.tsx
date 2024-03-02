import { Stack, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import ApiErrorBoundary from "@/components/layout/ApiErrorBoundary";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import RoutePath from "@/routes/routePath";

export default function Layout() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return <Navigate to={RoutePath.Signin} />;
  }

  return (
    <ApiErrorBoundary>
      <Container>
        <Sidebar />
        <BodyContainer>
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
