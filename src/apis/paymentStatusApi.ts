import { apiClient } from ".";
import { SearchVariantType } from "@/types/entities/payment";

export const paymentStatusApi = {
  getPaymentList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
  ) => {
    let url = `admin/orders?page=${page}&size=${size}`;

    if (searchText && searchVariant) {
      if (searchVariant === "semester") {
        const [academicYear, semester] = searchText.split("-");
        if (!semester) {
          return;
        }

        url += `&academicYear=${academicYear}&semesterType=${semester === "1" ? "FIRST" : "SECOND"}`;
      } else {
        url += `&${searchVariant}=${searchText}`;
      }
    }

    const response = await apiClient.get(url);
    return response.data;
  },

  getPaymentDetailInfo: async (orderId: number) => {
    const response = await apiClient.get(`/admin/orders/${orderId}`);
    return response.data;
  },
};
