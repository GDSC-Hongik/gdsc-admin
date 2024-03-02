import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authApi } from "@/apis/authApi";
import RoutePath from "@/routes/routePath";

export default function useLoginMutation(email: string, password: string) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authApi.commonLogin(email, password),
    onSuccess: (data) => {
      navigate(RoutePath.AllMembers);
      toast.success("로그인 성공");

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  })
}