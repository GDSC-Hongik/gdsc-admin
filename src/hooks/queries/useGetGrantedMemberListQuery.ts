import { useQuery } from "@tanstack/react-query";
import { grantedMemberApi } from "@/apis/grantedMemberApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/store";

export default function useGetGrantedMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType<"grantedMember">,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.grantedMemberList, page, size, searchVariant, searchText],
    queryFn: () => grantedMemberApi.getGrantedMemberList(page, size, searchVariant, searchText),
  });

  const grantedMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { grantedMemberList, totalElements };
}
