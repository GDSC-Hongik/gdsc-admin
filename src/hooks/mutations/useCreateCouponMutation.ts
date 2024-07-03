import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";

export default function useCreateCouponMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: couponApi.createCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.couponList],
      });
      toast.success("쿠폰이 생성되었습니다.");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
