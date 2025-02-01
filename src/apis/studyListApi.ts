import { apiClient } from ".";
import { StudyListApiResponseDtoType } from "@/types/dtos/study";

export const studyApi = {
  getStudyList: async (): Promise<StudyListApiResponseDtoType[]> => {
    const response = await apiClient.get("/admin/studies");
    return response.data;
  },
};
