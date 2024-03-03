import { apiClient } from "."

export const grantedMemberApi = {
  getGrantedMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string
  ) => {
    if (searchText) {
      const searchUrl = `admin/members/granted?${searchType}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/granted?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data;
  }
}