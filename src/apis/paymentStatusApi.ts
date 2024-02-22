import { PaymentStatusMemberListDtoType } from "@types/dtos/member";
import { apiClient } from ".";

export const paymentStatusApi = {
  getPaymentStatusMemberList: async (
    page: number,
    size: number,
  ): Promise<PaymentStatusMemberListDtoType> => {
    const response = await apiClient.get(`/members/payment?page=${page}&size=${size}`);
    return response.data.content;
  },
};
