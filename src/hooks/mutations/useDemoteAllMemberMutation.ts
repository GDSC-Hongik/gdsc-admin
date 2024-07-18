import { useMutation } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { SemesterVariantType } from "@/types/entities/recruitment";

type DemoteAllMemberMutationArgumentType = {
  academicYear: number;
  semesterType: SemesterVariantType | null;
};

export default function useDemoteAllMemberMutation() {
  return useMutation({
    mutationFn: ({ academicYear, semesterType }: DemoteAllMemberMutationArgumentType) =>
      recruitmentApi.demoteAllMember(academicYear, semesterType),
  });
}
