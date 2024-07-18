import { apiClient } from ".";
import {
  RecruitmentResponseDtoType,
  RecruitmentRoundResponseDtoType,
} from "@/types/dtos/recruitment";
import { CreateRecruitmentBodyType, RecruitmentRoundBodyType, SemesterVariantType } from "@/types/entities/recruitment";

export const recruitmentApi = {
  demoteAllMember: async (
    academicYear: number,
    semesterType: SemesterVariantType | null,
  ): Promise<void> => {
    const response = await apiClient.patch(
      `/admin/members/demotion?academicYear=${academicYear}&semesterType=${semesterType}`,
    );
    return response.data;
  },

  getRecruitments: async (): Promise<RecruitmentResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments");
    return response.data;
  },

  createRecruitment: async (body: CreateRecruitmentBodyType): Promise<void> => {
    const response = await apiClient.post("/admin/recruitments", body);
    return response.data;
  },

  getRecruitmentRound: async (): Promise<RecruitmentRoundResponseDtoType> => {
    const response = await apiClient.get("/admin/recruitments/rounds");
    return response.data;
  },

  createRecruitmentRound: async (body: RecruitmentRoundBodyType): Promise<void> => {
    const response = await apiClient.post("/admin/recruitments/rounds", body);
    return response.data;
  },

  editRecruitmentRound: async (
    recruitmentRoundId: number,
    body: RecruitmentRoundBodyType,
  ): Promise<void> => {
    const response = await apiClient.put(`/admin/recruitments/rounds/${recruitmentRoundId}`, body);
    return response.data;
  },
};
