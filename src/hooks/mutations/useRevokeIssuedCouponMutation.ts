import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";

export default function useRevokeIssuedCouponMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: couponApi.revokeIssuedCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.issuedCouponList],
      });
      toast.success("쿠폰을 회수하였습니다.");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
