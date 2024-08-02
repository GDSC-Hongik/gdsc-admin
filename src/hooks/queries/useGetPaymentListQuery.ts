import { useQuery } from "@tanstack/react-query";
import { paymentStatusApi } from "@/apis/paymentStatusApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/payment";

export default function useGetPaymentListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.paymentList, page, size, searchVariant, searchText],
    queryFn: () => paymentStatusApi.getPaymentList(page, size, searchVariant, searchText),
  });

  const paymentList = data?.content;
  const totalElements = data?.totalElements;

  return { paymentList, totalElements };
}
