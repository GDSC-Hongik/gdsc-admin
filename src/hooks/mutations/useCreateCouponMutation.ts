import { useMutation } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";
import { CouponInfoType } from "@/types/entities/coupon";

export default function useCreateCouponMutation() {
  return useMutation({
    mutationFn: (body: CouponInfoType) => couponApi.createCoupon(body),
  });
}
