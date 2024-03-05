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
  onSuccessCallback: () => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => allMemberApi.editMemberInfo(memberId, body),
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.allMemberList, QueryKey.grantableMemberList],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.allMemberList],
      });
      toast.success("수정 완료되었습니다.")
      onSuccessCallback();
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage)
    },
  });
}
