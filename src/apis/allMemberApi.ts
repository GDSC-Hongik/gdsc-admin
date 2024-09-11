import { apiClient } from ".";
import {
  AllMemberListResponseDtoType,
  DashboardInfoResponseDtoType,
  DepartmentListResponseDtoType,
} from "@/types/dtos/member";
import { EditMemberInfoBodyType, SearchVariantType } from "@/types/entities/member";

export const allMemberApi = {
  getAllMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
  ): Promise<AllMemberListResponseDtoType> => {
    let url = `admin/members?roles=REGULAR&page=${page}&size=${size}`;

    if (searchText && searchVariant) {
      url += `&${searchVariant}=${searchText}`;
    }

    const response = await apiClient.get(url);
    return response.data;
  },

  deleteMember: async (memberId: number): Promise<void> => {
    const response = await apiClient.delete(`admin/members/${memberId}`);
    return response.data;
  },

  searchDepartmentList: async (searchText: string): Promise<DepartmentListResponseDtoType[]> => {
    const response = await apiClient.get(
      `common/members/departments/search?department=${searchText}`,
    );
    return response.data;
  },

  editMemberInfo: async (memberId: number, body: EditMemberInfoBodyType) => {
    const response = await apiClient.put(`admin/members/${memberId}`, body);
    return response.data;
  },

  getMemberInfoExcel: async (): Promise<string> => {
    const response = await apiClient.get("admin/members/excel", { responseType: "arraybuffer" });
    return response.data;
  },

  getDashboardInfo: async (): Promise<DashboardInfoResponseDtoType> => {
    const response = await apiClient.get("onboarding/members/me/dashboard");
    return response.data;
  },
};
