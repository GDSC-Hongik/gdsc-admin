import { useMutation } from "@tanstack/react-query";
import { allMemberApi } from "@/apis/allMemberApi";

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
};

export default function useEditMemberInfoMutation() {
  return useMutation({
    mutationFn: ({ memberId, body }: EditMemberInfoMutationArgumentType) =>
      allMemberApi.editMemberInfo(memberId, body),
  });
}
