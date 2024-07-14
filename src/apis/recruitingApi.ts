import { apiClient } from ".";
import { SemesterVariantType } from "@/types/entities/recruitment";

export const recruitmentApi = {
  demoteAllMember: async (academicYear: number, semesterType: SemesterVariantType | null) => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },

  getRecruitments: async () => {
    const response = await apiClient.get("/admin/recruitments");
    return response.data;
  },
};
