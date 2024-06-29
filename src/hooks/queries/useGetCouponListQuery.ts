import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/constants/queryKey";
import { couponApi } from "@/apis/couponApi";

export default function useGetCouponListQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.couponList],
    queryFn: couponApi.getCouponList,
  });

  return data;
}
