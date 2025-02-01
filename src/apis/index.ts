import axios, { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "@/environment";
import useAuthStorage from "@/hooks/auth/useAuthStorage";
import { ErrorResponse } from "@/types/entities/error";

const DEV_AUTH_TOKEN = import.meta.env.VITE_DEV_AUTH_TOKEN;

const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  apiClient.interceptors.request.use(config => {
    const authStorage = useAuthStorage();

    const accessToken = authStorage.accessToken;
    if (accessToken || DEV_AUTH_TOKEN) {
      config.headers.Authorization = `Bearer ${accessToken || DEV_AUTH_TOKEN}`;
    }

    return config;
  });

  apiClient.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        sessionStorage.clear();

        return Promise.reject(error);
      } else {
        toast.error((error.response?.data as ErrorResponse).errorMessage);
      }
    },
  );

  return apiClient;
};

export const apiClient = createApiClient();
