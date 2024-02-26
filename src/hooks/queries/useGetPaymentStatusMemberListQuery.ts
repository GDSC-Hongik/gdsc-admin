import { useQuery } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetPaymentStatusMemberListQuery(page: number, size: number, searchType: string, searchText: string) {
  const { data: paymentStatusMemberList = [] } = useQuery({
    queryKey: [QueryKey.paymentStatusMemberList, page, size, searchType, searchText],
    queryFn: () => paymentStatusApi.getPaymentStatusMemberList(page, size, searchType, searchText),
  });

  return { paymentStatusMemberList };
}
