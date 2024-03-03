import { useQuery } from "@tanstack/react-query";
import { grantedMemberApi } from "@/apis/grantedMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetGrantedMemberListQuery(
  page: number,
  size: number,
  searchType: string,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.grantedMemberList, page, size, searchType, searchText],
    queryFn: () => grantedMemberApi.getGrantedMemberList(page, size, searchType, searchText),
  });

  const grantedMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { grantedMemberList, totalElements };
}