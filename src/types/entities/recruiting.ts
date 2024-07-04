export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  round: string;
  name: string;
  startDate: string;
  endDate: string;
  fee: number;
};

export type SemesterVariantType = "FIRST" | "SECOND";
