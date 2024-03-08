import { BASE_URL } from "src/environment";
import axios, { AxiosError, AxiosInstance } from "axios";
import useAuthStorage from "@/hooks/useAuthStorage";
// import lStorage, { StorageKeys } from "@/utils/storage/index";

const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use(config => {
    const authStorage = useAuthStorage();

    const accessToken = authStorage.accessToken;

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
