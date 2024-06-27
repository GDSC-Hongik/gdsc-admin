import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/constants/queryKey";
import { couponApi } from "@/apis/couponApi";

export default function useGetIssuedCouponListQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.issuedCouponList],
    queryFn: () => couponApi.getIssuedCouponList(),
  });

  return data;
}
