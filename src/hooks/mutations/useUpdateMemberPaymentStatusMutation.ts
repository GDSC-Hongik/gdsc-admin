import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";

export default function useUpdateMemberPaymentStatusMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: paymentStatusApi.updateMemberPaymentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.paymentStatusMemberList],
      });
      toast.success("납부 상태를 변경 완료하였습니다!");
    },
    onError: () => {
      toast.error("오류가 발생하였습니다.");
    },
  });
}
