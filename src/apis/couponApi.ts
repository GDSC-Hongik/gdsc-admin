import { IssuedCouponListResponseDtoType } from "@/types/dtos/coupon";
import { apiClient } from ".";

export const couponApi = {
  getIssuedCouponList: async (): Promise<IssuedCouponListResponseDtoType> => {
    const response = await apiClient.get("/admin/coupons");
    return response.data;
  },

  createCoupon: async (body: { name: string; discountAmount: number }) => {
    const response = await apiClient.post("/admin/coupons", body);
    return response.data;
  },
};
