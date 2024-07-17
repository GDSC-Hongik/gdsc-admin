import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { SemesterVariantType } from "@/types/entities/recruitment";

export default function useEditRecruitmentRoundMutation() {
  return useMutation({
    mutationFn: ({
      recruitmentRoundId,
      body,
    }: {
      recruitmentRoundId: number;
      body: {
        academicYear: number;
        semesterType: SemesterVariantType;
        name: string;
        startDate: string;
        endDate: string;
        roundType: "FIRST" | "SECOND";
      };
    }) => recruitmentApi.editRecruitmentRound(recruitmentRoundId, body),
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
