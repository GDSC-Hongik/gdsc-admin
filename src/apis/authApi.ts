import { apiClient } from "."
import { AuthResponseDtoType } from "@/types/dtos/auth";

export const authApi = {
  commonLogin: async (email: string, password: string): Promise<AuthResponseDtoType> => {
    const response = await apiClient.post('auth/login', {
      email,
      password
    });
    return response.data;
  }
}