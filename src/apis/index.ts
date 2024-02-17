import { BASE_URL } from "src/environment";
import lStorage, { StorageKeys } from "@utils/storage/index";
import axios, { AxiosError, AxiosInstance } from "axios";

const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use(config => {
    const accessToken = lStorage.get(StorageKeys.Token);

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

export const FormDataHeaders = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
