import { useMutation } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { SemesterVariantType } from "@/types/entities/recruitment";

type CreateRecruitmentMutationArgumentType = {
  semesterStartDate: string;
  semesterEndDate: string;
  academicYear: number;
  semesterType: SemesterVariantType;
  fee: number;
  feeName: string;
};

export default function useCreateRecruitmentMutation() {
  return useMutation({
    mutationFn: (body: CreateRecruitmentMutationArgumentType) =>
      recruitmentApi.createRecruitment(body),
  });
}
