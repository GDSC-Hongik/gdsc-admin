import { useQuery } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetPaymentDetailInfoQuery(orderId: number) {
  const { data: paymentDetailInfo } = useQuery({
    queryKey: [QueryKey.paymentDetailInfo, orderId],
    queryFn: () => paymentStatusApi.getPaymentDetailInfo(orderId),
    enabled: !!orderId,
  });

  return { paymentDetailInfo };
}
