import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { couponApi } from "@/apis/couponApi";

export default function useIssueCouponMutation() {
  return useMutation({
    mutationFn: couponApi.issueCoupon,
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
