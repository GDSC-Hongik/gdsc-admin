import { Dayjs } from "dayjs";

export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  round: string;
  startDate: string;
  endDate: string;
  fee: number;
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

export type RecruitingRoundModalInfoType = {
  recruitmentRoundId: number;
  academicYear: string;
  semester: string;
  roundType: RecruitmentRoundType;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  name: string;
};

export type RecruitingRoundInfoType = {
  id: number;
  academicYear: string;
  roundType: RecruitmentRoundType;
  semester: string;
  startDate: string;
  endDate: string;
  name: string;
};

export type RecruitmentRoundType = "1차" | "2차";
