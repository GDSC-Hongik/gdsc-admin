import { useQuery } from "@tanstack/react-query";
import { grantableMemberApi } from "@/apis/grantableMemberApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/store";

export default function useGetGrantableMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType<"grantableMember">,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.grantableMemberList, page, size, searchVariant, searchText],
    queryFn: () => grantableMemberApi.getGrantableMemberList(page, size, searchVariant, searchText),
  });

  const grantableMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { grantableMemberList, totalElements };
}
