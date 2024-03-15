import { useQuery } from "@tanstack/react-query";
import { allMemberApi } from "@/apis/allMemberApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetDepartmentListQuery(searchText: string) {
  const { data: departmentList = [] } = useQuery({
    queryKey: [QueryKey.departmentList, searchText],
    queryFn: () => allMemberApi.searchDepartmentList(searchText),
    enabled: !!searchText?.length,
  });

  return { departmentList };
}
