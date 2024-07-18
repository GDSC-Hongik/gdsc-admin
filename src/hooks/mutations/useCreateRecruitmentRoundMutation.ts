import { useMutation } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { RoundVariantType, SemesterVariantType } from "@/types/entities/recruitment";

type CreateRecruitmentRoundMutationArgumentType = {
  body: {
    academicYear: number;
    semesterType: SemesterVariantType;
    name: string;
    startDate: string;
    endDate: string;
    roundType: RoundVariantType;
  };
};

export default function useCreateRecruitmentRoundMutation() {
  return useMutation({
    mutationFn: ({ body }: CreateRecruitmentRoundMutationArgumentType) =>
      recruitmentApi.createRecruitmentRound(body),
  });
}
