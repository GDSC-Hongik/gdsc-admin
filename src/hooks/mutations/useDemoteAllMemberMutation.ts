import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
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
    onSuccess: () => {
      toast.success("정회원 일괄 강등하였습니다!");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
