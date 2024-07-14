import { Dayjs } from "dayjs";

export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  round: string;
  semesterStartDate: string;
  semesterEndDate: string;
  recruitmentFee: number;
  academicYear: string;
};

export type SemesterVariantType = "FIRST" | "SECOND";

export type RecruitmentRoundInfoType = {
  recruitmentRoundId: number;
  semester: string;
  roundType: "FIRST" | "SECOND";
  startDate: string;
  endDate: string;
  name: string;
};

export type FilteredRecruitmentRoundInfoType = {
  id: number;
  academicYear: string;
  semester: string;
  roundType: RecruitmentRoundType;
  startDate: string;
  endDate: string;
  name: string;
};

export type RecruitmentRoundType = "1차" | "2차";

export type RecruitmentRoundModalInfoType = {
  recruitmentRoundId: number;
  academicYear: string;
  semester: string;
  roundType: RecruitmentRoundType;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  name: string;
};
