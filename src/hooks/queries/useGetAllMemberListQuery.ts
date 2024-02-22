import { allMemberApi } from "@apis/allMemberApi";
import { allMemberQueryKey } from "@constants/queryKey";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllMemberListQuery(
  page: number,
  size: number,
  searchType: string,
  searchText: string,
) {
  const { data: allMemberList = [] } = useQuery({
    queryKey: [allMemberQueryKey.allMemberList, page, size, searchType, searchText],
    queryFn: () => allMemberApi.getAllMemberList(page, size, searchType, searchText),
    enabled: !!searchText.length,
  });

  return { allMemberList };
}
