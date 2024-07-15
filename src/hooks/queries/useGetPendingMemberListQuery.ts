import { useQuery } from "@tanstack/react-query";
import { pendingMemberApi } from "@/apis/pendingMemberApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType, MemberVariantType } from "@/types/entities/member";

export default function useGetPendingMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType,
  searchText: string,
  memberVariant: MemberVariantType,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.pendingMemberList, page, size, searchVariant, searchText, memberVariant],
    queryFn: () =>
      pendingMemberApi.getPendingMemberList(page, size, searchVariant, searchText, memberVariant),
  });

  const pendingMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { pendingMemberList, totalElements };
}
