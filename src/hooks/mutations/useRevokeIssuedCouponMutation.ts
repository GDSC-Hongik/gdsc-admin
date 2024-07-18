import { useMutation } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";

export default function useRevokeIssuedCouponMutation() {
  return useMutation({
    mutationFn: couponApi.revokeIssuedCoupon,
  });
}
