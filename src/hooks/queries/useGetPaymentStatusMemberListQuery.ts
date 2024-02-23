import { useQuery } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetPaymentStatusMemberListQuery(page: number, size: number) {
  const { data: paymentStatusMemberList = [] } = useQuery({
    queryKey: [QueryKey.paymentStatusMemberList, page, size],
    queryFn: () => paymentStatusApi.getPaymentStatusMemberList(page, size),
  });

  return { paymentStatusMemberList };
}
