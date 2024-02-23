import { Stack, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import useAuthStorage from "@/hooks/useAuthStorage";
import RoutePath from "@/routes/routePath";

export default function Layout() {
  const { isEmptyToken } = useAuthStorage();

  if (!isEmptyToken) {
    return <Navigate to={RoutePath.Signin} />;
  }

  return (
    <Container>
      <Sidebar />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Container>
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
