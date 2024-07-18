import RoutePath from "@/routes/routePath";

export const titleVariant = {
  allMember: "전체 정회원 관리",
  pendingMember: "가입 대기 회원 관리",
  paymentStatus: "회비 납부 기록 관리",
  recruitment: "학기 정보 관리",
  recruitmentRound: "모집 회차 관리",
  coupon: "쿠폰 관리",
  issuedCoupon: "발급한 쿠폰 관리",
  couponProvision: "쿠폰 지급",
} as const;

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
    path: RoutePath.IssuedCoupon,
  },
  {
    label: "쿠폰 지급",
    path: RoutePath.CouponProvision,
  },
];

export const recruitmentLinkButtonInfoList = [
  {
    label: "학기 정보 관리",
    path: RoutePath.Recruitment,
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
