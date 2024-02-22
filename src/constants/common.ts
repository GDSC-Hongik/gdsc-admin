import RoutePath from "@routes/routePath";

export const memberPageList = [
  { label: "전체 멤버 관리", path: RoutePath.AllMembers },
  { label: "가입 대기 멤버 관리", path: RoutePath.PendingMembers },
];

export const paymentPageList = [{ label: "회비 납부 여부 관리", path: RoutePath.PaymentStatus }];

export const titleVariant = {
  allMember: "전체 멤버 관리",
  pendingMember: "가입 대기 멤버 관리",
  paymentStatus: "회비 납부 여부 관리",
} as const;
