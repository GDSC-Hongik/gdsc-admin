import { pendingMemberApi } from "@apis/pendingMemberApi";
import { QueryKey } from "@constants/queryKey";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingMemberListQuery(page: number, size: number) {
  const { data: pendingMemberList = [] } = useQuery({
    queryKey: [QueryKey.pendingMemberList, page, size],
    queryFn: () => pendingMemberApi.getPendingMemberList(page, size),
  });

  return { pendingMemberList };
}
