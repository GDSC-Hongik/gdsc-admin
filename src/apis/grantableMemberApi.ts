import { apiClient } from ".";
import { GrantableMemberResponseDtoType } from "@/types/dtos/member";
import { SearchVariantType } from "@/types/entities/store";

export const grantableMemberApi = {
  getGrantableMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType<"grantableMember">,
    searchText: string,
  ): Promise<GrantableMemberResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members/grantable?${searchVariant}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/grantable?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data;
  },
};
