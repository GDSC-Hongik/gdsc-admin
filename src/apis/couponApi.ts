import { apiClient } from ".";
import {
  CouponListResponseDtoType,
  CouponProvisionMemberListResponseDtoType,
  IssuedCouponListResponseDtoType,
} from "@/types/dtos/coupon";
import { SearchVariantType as CouponSearchVariantType } from "@/types/entities/coupon";
import { SearchVariantType as MemberSearchVariantType } from "@/types/entities/member";

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
    searchVariant: CouponSearchVariantType,
    searchText: string,
  ): Promise<IssuedCouponListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `/admin/coupons/issued?${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data.content;
    }

    const commonUrl = `/admin/coupons/issued?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);

    return response.data.content;
  },

  issueCoupon: async (body: { couponId: number; memberIds: number[] }) => {
    const response = await apiClient.post("/admin/coupons/issued", body);
    return response.data;
  },

  getCouponProvisionMemberList: async (
    page: number,
    size: number,
    searchVariant: MemberSearchVariantType,
    searchText: string,
  ): Promise<CouponProvisionMemberListResponseDtoType> => {
    if (searchText && searchVariant) {
      const searchUrl = `/admin/members?role=REGULAR,ASSOCIATE?${searchVariant}=${searchText}&page=${page}&size=${size}`;

      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `/admin/members?role=REGULAR,ASSOCIATE?page=${page}&size=${size}`;

    const response = await apiClient.get(commonUrl);

    return response.data;
  },
};
