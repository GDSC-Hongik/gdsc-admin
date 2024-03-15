import { useQuery } from "@tanstack/react-query";
import { pendingMemberApi } from "@/apis/pendingMemberApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/store";

export default function useGetPendingMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType<"pendingMember">,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.pendingMemberList, page, size, searchVariant, searchText],
    queryFn: () => pendingMemberApi.getPendingMemberList(page, size, searchVariant, searchText),
  });

  const pendingMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { pendingMemberList, totalElements };
}
