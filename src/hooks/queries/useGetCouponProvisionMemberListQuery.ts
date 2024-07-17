import { useQuery } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/member";

export default function useGetCouponProvisionMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.couponProvisionMemberList, page, size, searchVariant, searchText],
    queryFn: () => couponApi.getCouponProvisionMemberList(page, size, searchVariant, searchText),
  });

  const couponProvisionMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { couponProvisionMemberList, totalElements };
}
