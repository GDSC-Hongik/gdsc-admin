import { useQuery } from "@tanstack/react-query";
import { recruitingApi } from "@/apis/recruitingApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetRecruitmentsRoundsQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.recruitmentsRounds],
    queryFn: recruitingApi.getRecruitmentsRounds,
  });

  return data;
}
