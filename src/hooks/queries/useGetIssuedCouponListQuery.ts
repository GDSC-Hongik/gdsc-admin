import { useQuery } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetIssuedCouponListQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.issuedCouponList],
    queryFn: couponApi.getIssuedCouponList,
  });

  return data;
}
