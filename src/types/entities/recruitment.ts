import { Dayjs } from "dayjs";

export type SemesterVariantType = "FIRST" | "SECOND";

export type RoundVariantType = "FIRST" | "SECOND";

export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  semesterStartDate: string;
  semesterEndDate: string;
  recruitmentFee: number;
  feeName: string;
};

export type RecruitmentRoundType = "1차" | "2차";

type RecruitmentRoundBaseInfoType = {
  id: number;
  academicYear: string;
  recruitmentRoundId: number;
  semester: string;
  roundType: RecruitmentRoundType;
  startDate: string;
  endDate: string;
  name: string;
};

export type RecruitmentRoundInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "recruitmentRoundId" | "semester" | "startDate" | "endDate" | "name"
> & {
  round: "1차" | "2차";
};

export type FilteredRecruitmentRoundInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "id" | "academicYear" | "semester" | "roundType" | "startDate" | "endDate" | "name"
>;

export type RecruitmentRoundModalInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "recruitmentRoundId" | "academicYear" | "semester" | "name" | "roundType"
> & {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

export type RecruitmentModalInfoType = {
  semesterStartDate: Dayjs | null;
  semesterEndDate: Dayjs | null;
  academicYear: number | "";
  semester: string;
  fee: number | "";
  feeName: string;
};

export type CreateRecruitmentBodyType = {
  semesterStartDate: string;
  semesterEndDate: string;
  academicYear: number;
  semesterType: SemesterVariantType;
  fee: number;
  feeName: string;
};

export type RecruitmentRoundBodyType = {
  academicYear: number;
  semesterType: SemesterVariantType;
  name: string;
  startDate: string;
  endDate: string;
  roundType: RoundVariantType;
};
