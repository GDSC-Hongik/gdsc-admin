export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  round: string;
  startDate: string;
  endDate: string;
  fee: number;
};

export type SemesterVariantType = "FIRST" | "SECOND";

export type RecruitmentRoundType = {
  recruitmentRoundId: number;
  semester: string;
  startDate: string;
  endDate: string;
  name: string;
};
