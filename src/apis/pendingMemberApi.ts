import { apiClient } from ".";

export const pendingMemberApi = {
  getPendingMemberList: async (page: number, size: number) => {
    const response = await apiClient.get(`/members/pending?page=${page}&size=${size}`);
    return response.data.content;
  },
};
