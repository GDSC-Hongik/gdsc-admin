import styled from "@emotion/styled";
import { Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";
import { theme } from "@/styles/theme";

export default function AuthErrorPage() {
  const navigation = useNavigate();

  const handleClickLogin = () => navigation(RoutePath.Signin);

  return (
    <StyledAuthErrorPageContainer spacing={4}>
      <StyledTextContainer textAlign="center">
        접근할 수 없는 유저입니다.
        <br />
        운영진에게 문의해주세요.
      </StyledTextContainer>
      <Button onClick={handleClickLogin}>다시 로그인하기</Button>
    </StyledAuthErrorPageContainer>
  );
}

const StyledAuthErrorPageContainer = styled(Stack)({
  height: "100vh",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 20,
});

const StyledTextContainer = styled(Box)({
  borderRadius: 2,
  backgroundColor: theme.palette.gray5,
  fontWeight: 700,
  padding: 3,
});
