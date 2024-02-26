import { apiClient } from ".";
import { GrantableMemberDtoType } from "@/types/dtos/member";

export const grantableMemberApi = {
  getGrantableMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string
  ): Promise<GrantableMemberDtoType> => {
    if (searchText) {
      const searchUrl = `/members/grantable?${searchType}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `/members/grantable?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data.content;
  },
};
