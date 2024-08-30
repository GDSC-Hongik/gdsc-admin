import { useQuery } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/coupon";

export default function useGetIssuedCouponListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.issuedCouponList, page, size, searchVariant, searchText],
    queryFn: () => couponApi.getIssuedCouponList(page, size, searchVariant, searchText),
  });

  const issuedCouponList = data?.content;
  const totalElements = data?.totalElements;

  return { issuedCouponList, totalElements };
}
