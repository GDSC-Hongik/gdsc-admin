import { useMutation } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { RoundVariantType, SemesterVariantType } from "@/types/entities/recruitment";

export type EditRecruitmentRoundMutationArgumentType = {
  recruitmentRoundId: number;
  body: {
    academicYear: number;
    semesterType: SemesterVariantType;
    name: string;
    startDate: string;
    endDate: string;
    roundType: RoundVariantType;
  };
};

export default function useEditRecruitmentRoundMutation() {
  return useMutation({
    mutationFn: ({ recruitmentRoundId, body }: EditRecruitmentRoundMutationArgumentType) =>
      recruitmentApi.editRecruitmentRound(recruitmentRoundId, body),
  });
}
