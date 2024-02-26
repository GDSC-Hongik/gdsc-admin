import { apiClient } from ".";
import { MemberPaymentStatusDtoType, PaymentStatusMemberListDtoType } from "@/types/dtos/member";
import { StatusType } from "@/types/entities/member";

export const paymentStatusApi = {
  getPaymentStatusMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string
  ): Promise<PaymentStatusMemberListDtoType> => {
    if (searchText) {
      const searchUrl = `/members/payment?${searchType}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `/members/payment?page=${page}&size=${size}`

    const response = await apiClient.get(commonUrl);
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
