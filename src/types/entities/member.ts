export type ManagementVariant =
  | "allMember"
  | "pendingMember"
  | "paymentStatus"
  | "recruiting"
  | "recruitingRound"
  | "coupon"
  | "couponProvision"
  | "issuedCoupon";

export type EditMemberInfoType = Exclude<MemberInfoType, "requirement">;

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

type MembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
];

export type SearchVariantType = MembersSearchVariantType[number] | null;

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};

export type DetailMemberInfoType = {
  name: string;
  studentId: string;
  phone: string;
  departmentName: string;
  email: string;
  discordUsername: string;
  nickname: string;
};

export type DetailMemberModalInfoType = {
  "이름": DetailMemberInfoType["name"];
  "학번": DetailMemberInfoType["studentId"];
  "전화번호": DetailMemberInfoType["phone"];
  "소속 학과": DetailMemberInfoType["departmentName"];
  "이메일": DetailMemberInfoType["email"];
  "디스코드 사용자명": DetailMemberInfoType["discordUsername"];
  "디스코드 별명": DetailMemberInfoType["nickname"];
};

export type MemberInfoSelectMenuType = {
  value: string;
  name: string;
  type: SearchVariantType;
}[];

export type MemberTypeSelectMenuType = {
  value: string;
  name: string;
  type: "GUEST" | "ASSOCIATE";
}[];
