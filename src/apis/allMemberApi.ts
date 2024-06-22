import { apiClient } from ".";
import { AllMemberListResponseDtoType, DepartmentListResponseDtoType } from "@/types/dtos/member";
import { SearchVariantType } from "@/types/entities/context";

export const allMemberApi = {
  getAllMemberList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType<"allMember">,
    searchText: string,
  ): Promise<AllMemberListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `admin/members?role=REGULAR&${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members?role=REGULAR&page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);
    return response.data;
  },

  deleteMember: async (memberId: number) => {
    const response = await apiClient.delete(`admin/members/${memberId}`);
    return response.data;
  },

  searchDepartmentList: async (searchText: string): Promise<DepartmentListResponseDtoType[]> => {
    const response = await apiClient.get(
      `common/members/departments/search?department=${searchText}`,
    );
    return response.data;
  },

  editMemberInfo: async (
    memberId: number,
    body: {
      studentId: string;
      name: string;
      phone: string;
      department: string;
      email: string;
      discordUsername: string | null;
      nickname: string | null;
    },
  ) => {
    const response = await apiClient.put(`admin/members/${memberId}`, body);
    return response.data;
  },

  getMemberInfoExcel: async (): Promise<string> => {
    const response = await apiClient.get("admin/members/excel", { responseType: "arraybuffer" });
    return response.data;
  },
};
