import { useQuery } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetRecruitmentRoundQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.recruitmentRound],
    queryFn: recruitmentApi.getRecruitmentRound,
  });

  return data;
}
