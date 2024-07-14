import { apiClient } from ".";
import { RecruitmentRoundResponseDtoType } from "@/types/dtos/recruiting";
import { SemesterVariantType } from "@/types/entities/recruiting";

export const recruitingApi = {
  demoteAllMember: async (academicYear: number, semesterType: SemesterVariantType | null) => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },

  getRecruitmentsRounds: async (): Promise<RecruitmentRoundResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments/rounds");
    return response.data;
  },
};
