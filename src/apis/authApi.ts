import { apiClient } from "."

export const authApi = {
  commonLogin: async (email: string, password: string) => {
    const response = await apiClient.post('auth/login', {
      email,
      password
    });
    return response.data;
  }
}