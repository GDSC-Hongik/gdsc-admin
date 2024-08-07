import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

export default function NotFoundErrorPage() {
  const navigate = useNavigate();

  const handleClickNavigateToHome = () => navigate(RoutePath.Index);

  return (
    <Stack>
      <Typography>페이지를 찾을 수 없습니다.</Typography>
      <Button onClick={handleClickNavigateToHome}>홈으로 돌아가기</Button>
    </Stack>
  );
}
