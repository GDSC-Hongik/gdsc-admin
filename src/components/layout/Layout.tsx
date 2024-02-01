import useAuthStorage from "@hooks/useAuthStorage";
import RoutePath from "@routes/routePath";
import { Stack, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const { isEmptyToken } = useAuthStorage();

  if (isEmptyToken) {
    return <Navigate to={RoutePath.Signin} />;
  }

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled(Stack)({
  width: "100%",
  height: "100%",
  flexDirection: "row",
});
