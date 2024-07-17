import { apiClient } from ".";
import {
  RecruitmentResponseDtoType,
  RecruitmentRoundResponseDtoType,
} from "@/types/dtos/recruitment";
import { SemesterVariantType } from "@/types/entities/recruitment";

export const recruitmentApi = {
  demoteAllMember: async (academicYear: number, semesterType: SemesterVariantType | null) => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },

  getRecruitments: async (): Promise<RecruitmentResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments");
    return response.data;
  },

  createRecruitment: async (body: {
    semesterStartDate: string;
    semesterEndDate: string;
    academicYear: number;
    semesterType: SemesterVariantType;
    fee: number;
  }) => {
    const response = await apiClient.post("/admin/recruitments", body);
    return response.data;
  },

  getRecruitmentRound: async (): Promise<RecruitmentRoundResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments/rounds");
    return response.data;
  },

  editRecruitmentRound: async (
    recruitmentRoundId: number,
    body: {
      academicYear: number;
      semesterType: SemesterVariantType;
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
