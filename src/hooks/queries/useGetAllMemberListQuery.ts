import { useQuery } from "@tanstack/react-query";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetAllMemberListQuery(
  page: number,
  size: number,
  searchType: string,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.allMemberList, page, size, searchType, searchText],
    queryFn: () => allMemberApi.getAllMemberList(page, size, searchType, searchText),
  });

  const allMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { allMemberList, totalElements };
}
