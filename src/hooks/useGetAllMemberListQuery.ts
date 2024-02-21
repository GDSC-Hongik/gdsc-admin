import { allMemberApi } from "@apis/allMemberApi";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllMemberListQuery(page: number, size: number) {
  const { data: allMemberList = [] } = useQuery({
    queryKey: ["allMemberList", page, size],
    queryFn: () => allMemberApi.getAllMemberList(page, size),
  });

  return { allMemberList };
}
