import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { QueryKey } from "@/constants/queryKey";

export default function useEditRecruitmentRound() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      recruitmentRoundId,
      body,
    }: {
      recruitmentRoundId: number;
      body: {
        name: string;
        startDate: string;
        endDate: string;
        roundType: "FIRST" | "SECOND";
      };
    }) => recruitmentApi.editRecruitmentRound(recruitmentRoundId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.recruitmentRound],
      });
      toast.success("모집 회차 정보가 수정되었습니다.");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
