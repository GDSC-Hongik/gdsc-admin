import { allMemberApi } from "@apis/allMemberApi";
import { allMemberQueryKey } from "@constants/queryKey";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllMemberListQuery(page: number, size: number) {
  const { data: allMemberList = [] } = useQuery({
    queryKey: [allMemberQueryKey.allMemberList, page, size],
    queryFn: () => allMemberApi.getAllMemberList(page, size),
  });

  return { allMemberList };
}
