import { pendingMemberApi } from "@apis/pendingMemberApi";
import { QueryKey } from "@constants/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useGrantMemberMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: pendingMemberApi.grantPendingMember,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.pendingMemberList],
      });
      data.grantedMembers.forEach(member => {
        toast.success(`${member}님이 승인이 완료되었습니다!`);
      });
      data.notGrantedMembers.forEach(member => {
        toast.error(`${member}님의 승인이 실패하였습니다!`);
      });
    },
    onError: () => {
      toast.error("오류가 발생했습니다.");
    },
  });
}
