import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useEditMemberInfoMutation(
  memberId: number,
  body: {
    studentId: string;
    name: string;
    phone: string;
    department: string;
    email: string;
    discordUsername: string;
    nickname: string;
  },
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => allMemberApi.editMemberInfo(memberId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.allMemberList] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다.");
    },
  });
}
