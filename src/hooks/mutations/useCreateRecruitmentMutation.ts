import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { QueryKey } from "@/constants/queryKey";
import { SemesterVariantType } from "@/types/entities/recruitment";

type CreateRecruitmentMutationArgumentType = {
  semesterStartDate: string;
  semesterEndDate: string;
  academicYear: number;
  semesterType: SemesterVariantType;
  fee: number;
};

export default function useCreateRecruitmentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateRecruitmentMutationArgumentType) =>
      recruitmentApi.createRecruitment(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.recruitment],
      });
      toast.success("리크루팅이 생성되었습니다.");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
