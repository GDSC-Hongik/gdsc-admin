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
  onSuccessCallback: () => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => allMemberApi.editMemberInfo(memberId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.allMemberList] });
      onSuccessCallback();
      toast.success("수정 완료되었습니다.")
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage)
    },
  });
}
