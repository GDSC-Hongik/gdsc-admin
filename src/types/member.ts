export type ManagementVariant = "allMember" | "pendingMember" | "feePaymentStatus";

export type AllMemberInfoType = {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: string;
  email: string;
  discordUsername: string;
  nickname: string;
};

export type AllMemberInfoStateType = Omit<AllMemberInfoType, "memberId">;
