export type ManagementVariant = "allMember" | "pendingMember" | "feePaymentStatus";

export type MemberInfoType = {
  memberId: string;
  studentId: string;
  name: string;
  phone: string;
  department: string;
  email: string;
  discordUsername: string;
  nickname: string;
};

export type MemberInfoStateType = Omit<MemberInfoType, "memberId">;
