import { useQuery } from "@tanstack/react-query";
import { studyApi } from "@/apis/studyListApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetStudyListQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.studyList],
    queryFn: () => studyApi.getStudyList(),
  });

  return data
    .map(study => ({
      studyId: study.studyId,
      title: study.title,
      openingDate: new Date(study.openingDate),
    }))
    .sort((a, b) => b.openingDate.getTime() - a.openingDate.getTime());
}
