import { apiClient } from ".";
import {
  CouponListResponseDtoType,
  CouponProvisionMemberListResponseDtoType,
  IssuedCouponListResponseDtoType,
} from "@/types/dtos/coupon";
import {
  CreateCouponBodyType,
  IssueCouponBodyType,
  SearchVariantType as CouponSearchVariantType,
} from "@/types/entities/coupon";
import { SearchVariantType as MemberSearchVariantType } from "@/types/entities/member";

export const couponApi = {
  getCouponList: async (): Promise<CouponListResponseDtoType> => {
    const response = await apiClient.get("/admin/coupons");
    return response.data;
  },

  createCoupon: async (body: CreateCouponBodyType): Promise<void> => {
    const response = await apiClient.post("/admin/coupons", body);
    return response.data;
  },

  revokeIssuedCoupon: async (issuedCouponId: number): Promise<void> => {
    const response = await apiClient.delete(`/admin/coupons/issued/${issuedCouponId}`);
    return response.data;
  },

  getIssuedCouponList: async (
    page: number,
    size: number,
    searchVariant: CouponSearchVariantType,
    searchText: string,
  ): Promise<IssuedCouponListResponseDtoType> => {
    let url = `admin/coupons/issued?page=${page}&size=${size}`;

    if (searchText && searchVariant) {
      url += `&${searchVariant}=${searchText}`;
    }

    const response = await apiClient.get(url);
    return response.data.content;
  },

  issueCoupon: async (body: IssueCouponBodyType): Promise<void> => {
    const response = await apiClient.post("/admin/coupons/issued", body);
    return response.data;
  },

  getCouponProvisionMemberList: async (
    page: number,
    size: number,
    searchVariant: MemberSearchVariantType,
    searchText: string,
  ): Promise<CouponProvisionMemberListResponseDtoType> => {
    let url = `/admin/members?roles=REGULAR,ASSOCIATE&page=${page}&size=${size}`;

    if (searchText && searchVariant) {
      url += `&${searchVariant}=${searchText}`;
    }

    const response = await apiClient.get(url);
    return response.data;
  },
};
