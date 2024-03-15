import { apiClient } from ".";
import { GrantableMemberDtoType } from "@/types/dtos/member";
import { SearchVariantType } from "@/types/entities/store";

export const grantableMemberApi = {
  getGrantableMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
  ): Promise<GrantableMemberDtoType> => {
    if (searchText) {
      const searchUrl = `admin/members/grantable?${searchVariant}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/grantable?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data;
  },
};
