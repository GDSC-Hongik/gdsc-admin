import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useDeleteMemberMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: allMemberApi.deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.allMemberList],
      });
      toast.success("탈퇴 처리 완료하였습니다!");
    },
    onError: () => {
      toast.error("오류가 발생했습니다.");
    },
  });
}
