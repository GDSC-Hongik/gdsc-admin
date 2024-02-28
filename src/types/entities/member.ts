export type ManagementVariant = "allMember" | "pendingMember" | "grantableMember" | "paymentStatus";

export type AllMemberInfoType = {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string;
  nickname: string;
};

export type AllMemberInfoStateType = AllMemberInfoType;

export type StatusType = "PENDING" | "VERIFIED";

export type PendingMemberInfoType = {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string;
  nickname: string;
  requirement: {
    univStatus: StatusType;
    discordStatus: StatusType;
    paymentStatus: StatusType;
    bevyStatus: StatusType;
  };
};

export type PendingMemberTableInfoType = {
  studentId: string;
  name: string;
  phone: string;
  discordUsername: string;
  nickname: string;
  paymentStatus: "완료" | "미완료";
};

export type GrantableMemberInfoType = AllMemberInfoType;

export type PaymentStatusInfoType = PendingMemberInfoType;