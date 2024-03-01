import { Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";
import { theme } from "@/styles/theme";

export default function AuthErrorPage() {
  const navigation = useNavigate();

  return (
    <Stack sx={{ height: "100vh", justifyContent: "space-between", alignItems: "center" }}>
      <Stack sx={{ paddingTop: 20 }} spacing={4}>
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: theme.palette.gray5,
            fontWeight: 700,
            padding: 3,
          }}
          textAlign="center"
        >
          접근할 수 없는 유저입니다.
          <br />
          운영진에게 문의해주세요.
        </Box>
        <Button onClick={() => navigation(RoutePath.Signin)}>다시 로그인하기</Button>
      </Stack>
    </Stack>
  );
}
