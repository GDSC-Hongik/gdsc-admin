import { useQuery } from "@tanstack/react-query";
import { couponApi } from "@/apis/couponApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetCouponListQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.couponList],
    queryFn: couponApi.getCouponList,
  });

  return data;
}
