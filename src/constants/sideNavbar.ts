import RoutePath from "@/routes/routePath";

export const membersLinkButtonInfoList = [
  {
    label: "전체 정회원 관리",
    path: RoutePath.AllMembers,
  },
  {
    label: "가입 대기 회원 관리",
    path: RoutePath.PendingMembers,
  },
];

export const paymentLinkButtonInfoList = [
  {
    label: "회비 납부 기록 관리",
    path: RoutePath.PaymentStatus,
  },
  {
    label: "쿠폰 관리",
    path: RoutePath.Coupon,
  },
  {
    label: "발급한 쿠폰 관리",
    path: RoutePath.CouponProvisionMembers,
  },
  {
    label: "쿠폰 지급",
    path: RoutePath.CouponProvision,
  },
];

export const recruitingLinkButtonInfoList = [
  {
    label: "학기 정보 관리",
    path: RoutePath.Recruiting,
  },
  {
    label: "모집 회차 관리",
    path: RoutePath.RecruitmentRound,
  },
];

export const historyLinkButtonInfoList = [
  {
    label: "학기별 정회원 기록",
    path: RoutePath.AllMemberHistoryPerSemester,
  },
  {
    label: "학기별 회비 납부 기록",
    path: RoutePath.PaymentStatusHistoryPerSemester,
  },
];
