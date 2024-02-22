import {
  GrantPendingMemberDtoType,
  GrantPendingMemberRequestBodyDtoType,
  PendingMemberListDtoType,
} from "@types/dtos/member";
import { apiClient } from ".";

export const pendingMemberApi = {
  getPendingMemberList: async (page: number, size: number): Promise<PendingMemberListDtoType> => {
    const response = await apiClient.get(`/members/pending?page=${page}&size=${size}`);
    return response.data.content;
  },

  grantPendingMember: async (
    memberIdList: GrantPendingMemberRequestBodyDtoType,
  ): Promise<GrantPendingMemberDtoType> => {
    const response = await apiClient.put(`/members/grant`, memberIdList);
    return response.data;
  },
};
