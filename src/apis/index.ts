import { BASE_URL } from "src/environment";
import axios, { AxiosError, AxiosInstance } from "axios";
// import useAuthStorage from "@/hooks/useAuthStorage";
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
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  apiClient.interceptors.response.use(
    response => response,
    (error: AxiosError) => Promise.reject(error),
  );

  return apiClient;
};

export const apiClient = createApiClient();
