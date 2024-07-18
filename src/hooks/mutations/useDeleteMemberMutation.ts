import { useMutation } from "@tanstack/react-query";
import { allMemberApi } from "@/apis/allMemberApi";

export default function useDeleteMemberMutation() {
  return useMutation({
    mutationFn: allMemberApi.deleteMember,
  });
}
