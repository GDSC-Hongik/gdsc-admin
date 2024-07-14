import { useQuery } from "@tanstack/react-query";
import { recruitingApi } from "@/apis/recruitingApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetRecruitmentsQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.recruitments],
    queryFn: recruitingApi.getRecruitments,
  });

  return data;
}
