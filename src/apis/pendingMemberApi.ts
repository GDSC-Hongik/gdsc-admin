import { apiClient } from ".";
import {
  GrantPendingMemberDtoType,
  GrantPendingMemberRequestBodyDtoType,
  PendingMemberListDtoType,
} from "@/types/dtos/member";
import { SearchVariantType } from "@/types/entities/store";

export const pendingMemberApi = {
  getPendingMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType<"pendingMember">,
    searchText: string,
  ): Promise<PendingMemberListDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members/pending?${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/pending?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data;
  },

  grantPendingMember: async (
    memberIdList: GrantPendingMemberRequestBodyDtoType,
  ): Promise<GrantPendingMemberDtoType> => {
    const response = await apiClient.put(`admin/members/grant`, memberIdList);
    return response.data;
  },
};
