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
      "eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJnZHNjLWhvbmdpayIsInN1YiI6IjEiLCJpYXQiOjE3MDgwNTY0MzAsImV4cCI6MTc4ODA2MzYzMCwicm9sZSI6IkFETUlOIn0.XxkGvV2duEc7WhDAfjfOqZKs4NlrJNYHGTCP3lr6XXgA2e46uI4f_0Rcmx3TqnXH";

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
