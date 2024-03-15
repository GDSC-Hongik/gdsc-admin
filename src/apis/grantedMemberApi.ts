import { apiClient } from ".";
import { SearchVariantType } from "@/types/entities/store";

export const grantedMemberApi = {
  getGrantedMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType<"grantedMember">,
    searchText: string,
  ) => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members/granted?${searchVariant}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/granted?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data;
  },
};
