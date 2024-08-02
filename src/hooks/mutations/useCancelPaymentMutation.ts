import { useMutation } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";

export default function useCancelPaymentMutation() {
  return useMutation({
    mutationFn: ({ orderId, cancelReason }: { orderId: number; cancelReason: string }) =>
      paymentStatusApi.cancelPayment(orderId, cancelReason),
  });
}
