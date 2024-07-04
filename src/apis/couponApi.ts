import { CouponListResponseDtoType, IssuedCouponListResponseDtoType } from "@/types/dtos/coupon";
import { apiClient } from ".";

export const couponApi = {
  getCouponList: async (): Promise<CouponListResponseDtoType> => {
    const response = await apiClient.get("/admin/coupons");
    return response.data;
  },

  createCoupon: async (body: { name: string; discountAmount: number | null }) => {
    const response = await apiClient.post("/admin/coupons", body);
    return response.data;
  },

  revokeIssuedCoupon: async (issuedCouponId: number) => {
    const response = await apiClient.delete(`/admin/coupons/issued/${issuedCouponId}`);
    return response.data;
  },

  getIssuedCouponList: async (): Promise<IssuedCouponListResponseDtoType> => {
    const response = await apiClient.get("/admin/coupons/issued");
    return response.data;
  },

  issueCoupon: async (body: { couponId: number; memberIds: number[] }) => {
    const response = await apiClient.post("/admin/coupons/issued", body);
    return response.data;
  },
};
