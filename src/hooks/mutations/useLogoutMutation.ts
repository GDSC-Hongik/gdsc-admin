import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/apis/authApi";
import RoutePath from "@/routes/routePath";

export default function useLogoutMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      sessionStorage.clear();
      navigate(RoutePath.Index);
    },
  });
}
