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
      const searchUrl = `admin/members/payment?${searchType}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/payment?page=${page}&size=${size}`

    const response = await apiClient.get(commonUrl);
    return response.data;
  },

  updateMemberPaymentStatus: async (requestObj: {
    memberId: number;
    paymentStatus: StatusType;
  }): Promise<MemberPaymentStatusDtoType> => {
    const response = await apiClient.put(`admin/members/payment/${requestObj.memberId}`, {
      status: requestObj.paymentStatus,
    });
    return response.data.status;
  },
};
