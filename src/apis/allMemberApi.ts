import { apiClient } from ".";
import { AllMemberListDtoType } from "@/types/dtos/member";

export const allMemberApi = {
  getAllMemberList: async (
    page: number,
    size: number,
    searchType?: string,
    searchText?: string,
  ): Promise<AllMemberListDtoType> => {
    const response = await apiClient.get(
      `/members?${searchType}=${searchText}&page=${page}&size=${size}`,
    );
    return response.data.content;
  },

  deleteMember: async (memberId: number) => {
    const response = await apiClient.delete(`/members/${memberId}`);
    return response.data;
  },
};
