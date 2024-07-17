import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { SemesterVariantType } from "@/types/entities/recruitment";

type CreateRecruitmentMutationArgumentType = {
  semesterStartDate: string;
  semesterEndDate: string;
  academicYear: number;
  semesterType: SemesterVariantType;
  fee: number;
};

export default function useCreateRecruitmentMutation() {
  return useMutation({
    mutationFn: (body: CreateRecruitmentMutationArgumentType) =>
      recruitmentApi.createRecruitment(body),
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
