import { apiClient } from ".";
import { MemberPaymentStatusDtoType, PaymentStatusMemberListDtoType } from "@/types/dtos/member";
import { StatusType } from "@/types/entities/member";

export const paymentStatusApi = {
  getPaymentStatusMemberList: async (
    page: number,
    size: number,
  ): Promise<PaymentStatusMemberListDtoType> => {
    const response = await apiClient.get(`/members/payment?page=${page}&size=${size}`);
    return response.data.content;
  },

  updateMemberPaymentStatus: async (requestObj: {
    memberId: number;
    paymentStatus: StatusType;
  }): Promise<MemberPaymentStatusDtoType> => {
    const response = await apiClient.put(`/members/payment/${requestObj.memberId}`, {
      status: requestObj.paymentStatus,
    });
    return response.data.status;
  },
};
