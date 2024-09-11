import { PaginationElementType } from "./common";
import { RequirementType } from "../entities/common";
import { MemberInfoType, StatusType } from "@/types/entities/member";

export type AllMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type DepartmentListResponseDtoType = {
  code: string;
  name: string;
};

export type PendingMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type PaymentStatusMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type MemberPaymentStatusResponseDtoType = StatusType;

export type DashboardInfoResponseDtoType = {
  member: {
    memberId: number;
    role: "GUEST" | "ASSOCIATE" | "REGULAR";
    manageRole: "ADMIN" | "NONE";
    studyRole: "MENTOR" | "STUDENT";
    basicInfo: {
      name: string;
      studentId: string;
      email: string;
      department: string;
      phone: string;
      discordUsername: string;
      nickname: string;
    };
    associateRequirement: {
      univStatus: RequirementType;
      discordStatus: Extract<RequirementType, "UNSATISFIED" | "SATISFIED">;
      bevyStatus: Extract<RequirementType, "UNSATISFIED" | "SATISFIED">;
      infoStatus: Extract<RequirementType, "UNSATISFIED" | "SATISFIED">;
    };
  };
  currentRecruitmentRound: {
    recruitmentId: number;
    name: string;
    period: {
      startDate: string;
      endDate: string;
      open: boolean;
    };
    feeName: string;
    fee: number;
    roundType: "FIRST" | "SECOND";
    roundTypeValue: string;
  };
  currentMembership: {
    membershipId: number;
    memberId: number;
    recruitmentId: number;
    regularRequirement: {
      paymentStatus: Extract<RequirementType, "UNSATISFIED" | "SATISFIED">;
      paymentSatisfied: boolean;
      allSatisfied: boolean;
    };
  };
};
