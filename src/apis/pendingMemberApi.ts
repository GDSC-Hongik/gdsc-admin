import { apiClient } from ".";
import {
  GrantPendingMemberResponseDtoType,
  GrantPendingMemberRequestDtoType,
  PendingMemberListResponseDtoType,
} from "@/types/dtos/member";
import { MemberVariantType, SearchVariantType } from "@/types/entities/search";

export const pendingMemberApi = {
  getPendingMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType<"pendingMember">,
    searchText: string,
    memberVariant: MemberVariantType,
  ): Promise<PendingMemberListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members/pending?role=${memberVariant}&${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/pending?role=${memberVariant}&page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data;
  },

  grantPendingMember: async (
    memberIdList: GrantPendingMemberRequestDtoType,
  ): Promise<GrantPendingMemberResponseDtoType> => {
    const response = await apiClient.put(`admin/members/grant`, memberIdList);
    return response.data;
  },
};
