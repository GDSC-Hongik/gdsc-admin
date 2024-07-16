import { apiClient } from ".";
import { CouponListResponseDtoType, IssuedCouponListResponseDtoType } from "@/types/dtos/coupon";
import { SearchVariantType } from "@/types/entities/coupon";

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

  getIssuedCouponList: async (
    page: number,
    size: number,
    searchVariant: SearchVariantType,
    searchText: string,
  ): Promise<IssuedCouponListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `/admin/coupons/issued?${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `/admin/coupons/issued?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);

    return response.data;
  },

  issueCoupon: async (body: { couponId: number; memberIds: number[] }) => {
    const response = await apiClient.post("/admin/coupons/issued", body);
    return response.data;
  },
};
