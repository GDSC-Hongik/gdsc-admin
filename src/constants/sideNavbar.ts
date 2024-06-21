import RoutePath from "@/routes/routePath";

export const membersLinkButtonInfoList = [
  {
    label: "전체 정회원 관리",
    path: RoutePath.AllMembers,
  },
  {
    label: "가입 대기 멤버 관리",
    path: RoutePath.PendingMembers,
  },
];

export const paymentLinkButtonInfoList = [
  {
    label: "회비 납부 관리",
    path: RoutePath.PaymentStatus,
  },
  {
    label: "쿠폰 관리",
    path: RoutePath.Coupon,
  },
  {
    label: "쿠폰 지급 명단 관리",
    path: RoutePath.CouponProvisionMembers,
  },
  {
    label: "쿠폰 지급",
    path: RoutePath.CouponProvision,
  },
];
