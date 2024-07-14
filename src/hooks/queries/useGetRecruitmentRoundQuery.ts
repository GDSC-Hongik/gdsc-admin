import { useQuery } from "@tanstack/react-query";
import { recruitingApi } from "@/apis/recruitingApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetRecruitmentRoundQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.recruitmentRound],
    queryFn: recruitingApi.getRecruitmentRound,
  });

  return data;
}
