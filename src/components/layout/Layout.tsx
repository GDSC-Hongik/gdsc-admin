import useAuthStorage from "@hooks/useAuthStorage";
import { Stack, styled } from "@mui/material";
import RoutePath from "@routes/routePath";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const { isEmptyToken } = useAuthStorage();
  isEmptyToken;

  // Todo: get user hook
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
