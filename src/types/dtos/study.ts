import { DayOfWeekType } from "../entities/dayofWeek";
import { StudyKoreanType, StudySemesterType } from "../entities/study";
import { TimeType } from "../entities/time";

export interface StudyListApiResponseDtoType {
  studyId: number;
  academicYear: number;
  semesterType: StudySemesterType;
  title: string;
  studyType: StudyKoreanType;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  totalWeek: number;
  openingDate: string;
}
