import { AllMemberListDtoType } from "@types/dtos/member";
import { apiClient } from ".";

export const allMemberApi = {
  getAllMemberList: async (page: number, size: number): Promise<AllMemberListDtoType> => {
    const response = await apiClient.get(`/members?page=${page}&size=${size}`);
    return response.data.content;
  },
};
