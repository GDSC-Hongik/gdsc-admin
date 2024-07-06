import { apiClient } from ".";
import { PendingMemberListResponseDtoType } from "@/types/dtos/member";
import { MemberVariantType } from "@/types/entities/common";
import { SearchVariantType } from "@/types/entities/member";

export const pendingMemberApi = {
  getPendingMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
    memberVariant: MemberVariantType,
  ): Promise<PendingMemberListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members?role=${memberVariant}&${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members?role=${memberVariant}&page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data;
  },
};
