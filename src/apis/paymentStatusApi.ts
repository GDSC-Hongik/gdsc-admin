import { apiClient } from ".";
import { SearchVariantType } from "@/types/entities/payment";
import { formatDateWithDash } from "@/utils/validation/formatDate";

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
      } else if (searchVariant === "approvedDate") {
        const [, , day] = searchText.split("-");

        if (!day) {
          return;
        }

        const formattedDate = formatDateWithDash(searchText);

        url += `&${searchVariant}=${formattedDate}`;
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

  cancelPayment: async (orderId: number, cancelReason: string) => {
    const response = await apiClient.post(`/admin/orders/${orderId}/cancel`, {
      cancelReason,
    });
    return response.data;
  },
};
