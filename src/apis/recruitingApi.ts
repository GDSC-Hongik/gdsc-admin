import { SemesterVariantType } from "@/types/dtos/recruiting";
import { apiClient } from ".";

export const recruitingApi = {
  demoteAllMember: async (academicYear: number, semesterType: SemesterVariantType) => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },
};
