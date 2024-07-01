export type ManagementVariant =
  | "allMember"
  | "pendingMember"
  | "paymentStatus"
  | "coupon"
  | "couponProvision"
  | "couponProvisionMembers";

export type MemberInfoType = {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string | null;
  nickname: string | null;
  requirement: {
    univStatus: "string";
    discordStatus: "string";
    bevyStatus: "string";
  };
};

export type StatusType = "PENDING" | "VERIFIED";

export type PendingMemberTableInfoType = {
  studentId: string;
  name: string;
  phone: string;
  discordUsername: string;
  nickname: string;
  paymentStatus: "완료" | "미완료";
};
