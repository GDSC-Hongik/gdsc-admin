import { apiClient } from ".";
import { AllMemberListDtoType, DepartmentListDtoType } from "@/types/dtos/member";

export const allMemberApi = {
  getAllMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string,
  ): Promise<AllMemberListDtoType> => {
    if (searchText) {
      const searchUrl = `admin/members?${searchType}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `admin/members?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data.content;
  },

  deleteMember: async (memberId: number) => {
    const response = await apiClient.delete(`admin/members/${memberId}`);
    return response.data;
  },

  searchDepartmentList: async (searchText: string): Promise<DepartmentListDtoType[]> => {
    const response = await apiClient.get(`common/members/departments/search?department=${searchText}`);
    return response.data;
  }
};
