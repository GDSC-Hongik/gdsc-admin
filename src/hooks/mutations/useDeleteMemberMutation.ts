import { allMemberApi } from "@apis/allMemberApi";
import { allMemberQueryKey } from "@constants/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteMemberMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: allMemberApi.deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries([allMemberQueryKey.allMemberList]);
      console.log("탈퇴 완료");
    },
  });
}
