import { useQuery } from "@tanstack/react-query";
import { pendingMemberApi } from "@/apis/pendingMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetPendingMemberListQuery(page: number, size: number, searchType: string, searchText: string) {
  const { data: pendingMemberList = [] } = useQuery({
    queryKey: [QueryKey.pendingMemberList, page, size, searchType, searchText],
    queryFn: () => pendingMemberApi.getPendingMemberList(page, size, searchType, searchText),
  });

  return { pendingMemberList };
}
