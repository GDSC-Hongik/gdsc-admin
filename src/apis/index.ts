import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_URL } from "src/environment";
import useAuthStorage from "@/hooks/useAuthStorage";

const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use(config => {
    // const authStorage = useAuthStorage();

    const accessToken =
      "eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJnZHNjLWhvbmdpayIsInN1YiI6IjI5NSIsImlhdCI6MTcwODA1NjQzMCwiZXhwIjoxODI4MDYzNjMwLCJyb2xlIjoiQURNSU4ifQ.IU6M3GCNMMblOG6KWBiN_0VInptZNTl-TaI4I_Cg74YEFAskGhUEeBUZsV8GQlSW";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  apiClient.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      const authStorage = useAuthStorage();

      if (error.response?.status === 401) {
        authStorage.clearAuthData();

        return Promise.reject(error);
      }
    },
  );

  return apiClient;
};

export const apiClient = createApiClient();
