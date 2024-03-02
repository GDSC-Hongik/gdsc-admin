import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { authApi } from "@/apis/authApi";

export default function useLoginMutation(email: string, password: string) {
  return useMutation({
    mutationFn: () => authApi.commonLogin(email, password),
    onSuccess: (data) => {
        toast.success("로그인 성공");
        console.log(data)
    },
    onError: () => {
      toast.error("로그인 실패");
    }
  })
}