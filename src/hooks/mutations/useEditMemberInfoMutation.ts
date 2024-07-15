import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";

type EditMemberInfoMutationArgumentType = {
  memberId: number;
  body: {
    studentId: string;
    name: string;
    phone: string;
    department: string;
    email: string;
    discordUsername: string | null;
    nickname: string | null;
  };
  onSuccess: () => void;
};

export default function useEditMemberInfoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ memberId, body }: EditMemberInfoMutationArgumentType) =>
      allMemberApi.editMemberInfo(memberId, body),
    onSuccess: async (_, variables) => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [QueryKey.allMemberList],
        }),
      ]);
      toast.success("수정 완료되었습니다.");
      variables.onSuccess();
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
