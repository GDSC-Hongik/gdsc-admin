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

  getRecruitmentRound: async (): Promise<RecruitmentRoundResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments/rounds");
    return response.data;
  },

  editRecruitmentRound: async (
    recruitmentRoundId: number,
    body: {
      name: string;
      startDate: string;
      endDate: string;
      roundType: "FIRST" | "SECOND";
    },
  ) => {
    const response = await apiClient.put(`/admin/recruitments/rounds/${recruitmentRoundId}`, body);
    return response.data;
  },
};
