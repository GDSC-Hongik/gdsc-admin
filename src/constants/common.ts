import RoutePath from "@/routes/routePath";

export const memberPageList = [
  { label: "전체 멤버 관리", path: RoutePath.AllMembers },
  { label: '승인 가능 멤버 관리', path: RoutePath.GrantableMembers },
  { label: "가입 대기 멤버 관리", path: RoutePath.PendingMembers },
];

export const paymentPageList = [
  { label: "회비 납부 여부 관리", path: RoutePath.PaymentStatusMembers },
];

export const titleVariant = {
  allMember: "전체 멤버 관리",
  grantableMember: "승인 가능 멤버 관리",
  pendingMember: "가입 대기 멤버 관리",
  paymentStatus: "회비 납부 여부 관리",
} as const;
