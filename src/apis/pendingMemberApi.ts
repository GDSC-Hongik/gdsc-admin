import { apiClient } from ".";
import {
  GrantPendingMemberDtoType,
  GrantPendingMemberRequestBodyDtoType,
  PendingMemberListDtoType,
} from "@/types/dtos/member";

export const pendingMemberApi = {
  getPendingMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string,
  ): Promise<PendingMemberListDtoType> => {
    if (searchText) {
      const searchUrl = `admin/members/pending?${searchType}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `admin/members/pending?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data.content;
  },

  grantPendingMember: async (
    memberIdList: GrantPendingMemberRequestBodyDtoType,
  ): Promise<GrantPendingMemberDtoType> => {
    const response = await apiClient.put(`admin/members/grant`, memberIdList);
    return response.data;
  },
};
