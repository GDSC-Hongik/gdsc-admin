import { useMutation } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";

export default function useIssueCouponMutation() {
  return useMutation({
    mutationFn: couponApi.issueCoupon,
  });
}
