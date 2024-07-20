import { apiClient } from ".";
import { PendingMemberListResponseDtoType } from "@/types/dtos/member";
import { MemberVariantType, SearchVariantType } from "@/types/entities/member";

export const pendingMemberApi = {
  getPendingMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
    memberVariant: MemberVariantType,
  ): Promise<PendingMemberListResponseDtoType> => {
    let url = `admin/members?roles=${memberVariant}&page=${page}&size=${size}`;

    if (searchText && searchVariant) {
      url += `&${searchVariant}=${searchText}`;
    }

    const response = await apiClient.get(url);
    return response.data;
  },
};
