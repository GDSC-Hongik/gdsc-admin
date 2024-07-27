import { apiClient } from ".";

export const paymentStatusApi = {
  getPaymentList: async () => {
    const response = await apiClient.get("admin/orders");
    return response.data;
  },

  getPaymentDetailInfo: async (orderId: number) => {
    const response = await apiClient.get(`/admin/orders/${orderId}`);
    return response.data;
  },
};
