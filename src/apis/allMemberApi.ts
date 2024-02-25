import { apiClient } from ".";
import { AllMemberListDtoType } from "@/types/dtos/member";

export const allMemberApi = {
  getAllMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string,
  ): Promise<AllMemberListDtoType> => {
    if (searchText) {
      const searchUrl = `/members?${searchType}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `/members?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data.content;
  },

  deleteMember: async (memberId: number) => {
    const response = await apiClient.delete(`/members/${memberId}`);
    return response.data;
  },
};
