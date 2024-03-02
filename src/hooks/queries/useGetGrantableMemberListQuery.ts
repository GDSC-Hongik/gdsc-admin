import { useQuery } from "@tanstack/react-query";
import { grantableMemberApi } from "@/apis/grantableMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetGrantableMemberListQuery(
  page: number,
  size: number,
  searchType: string,
  searchText: string
) {
  const { data } = useQuery({
    queryKey: [QueryKey.grantableMemberList, page, size, searchType, searchText],
    queryFn: () => grantableMemberApi.getGrantableMemberList(page, size, searchType, searchText),
  });

  const grantableMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { grantableMemberList, totalElements };
}