import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";

export default function useIssueCouponMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: couponApi.issueCoupon,
    onSuccess: variables => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.issuedCouponList],
      });
      toast.success("쿠폰이 발급되었습니다.");
      variables.onSuccess();
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
