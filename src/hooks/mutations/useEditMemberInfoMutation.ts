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
    discordUsername: string | null;
    nickname: string | null;
  },
  onSuccess: () => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => allMemberApi.editMemberInfo(memberId, body),
    onSuccess: async () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [QueryKey.allMemberList],
        }),
        queryClient.invalidateQueries({
          queryKey: [QueryKey.grantableMemberList],
        }),
      ]);
      toast.success("수정 완료되었습니다.");
      onSuccess();
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
