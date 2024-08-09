import { apiClient } from ".";

export const authApi = {
  logout: async () => {
    const response = await apiClient.get("/auth/logout");
    return response.data;
  },
};
