import { useQuery } from "@tanstack/react-query";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";
import { SearchVariantType } from "@/types/entities/store";

export default function useGetAllMemberListQuery(
  page: number,
  size: number,
  searchVariant: SearchVariantType<"allMember">,
  searchText: string,
) {
  const { data } = useQuery({
    queryKey: [QueryKey.allMemberList, page, size, searchVariant, searchText],
    queryFn: () => allMemberApi.getAllMemberList(page, size, searchVariant, searchText),
  });

  const allMemberList = data?.content;
  const totalElements = data?.totalElements;

  return { allMemberList, totalElements };
}
