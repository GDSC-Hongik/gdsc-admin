import { useQuery } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/store";

export default function useGetPaymentStatusMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType<"paymentStatus">,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.paymentStatusMemberList, page, size, searchVariant, searchText],
    queryFn: () =>
      paymentStatusApi.getPaymentStatusMemberList(page, size, searchVariant, searchText),
  });

  const paymentStatusMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { paymentStatusMemberList, totalElements };
}
