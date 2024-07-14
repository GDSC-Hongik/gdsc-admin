import { apiClient } from ".";
import { SemesterVariantType } from "@/types/entities/recruiting";

export const recruitingApi = {
  demoteAllMember: async (academicYear: number, semesterType: SemesterVariantType | null) => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },
};
