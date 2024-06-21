import { BASE_URL } from "@/environment";

const RoutePath = {
  Index: "/",

  AllMembers: "/member/all",
  PendingMembers: "/member/pending",

  PastSemester: "/past-semester",

  GrantedMembers: "/member/granted",
  GrantableMembers: "/member/grantable",

  PaymentStatus: "/payment/payment-status",
  Coupon: "/payment/coupon",
  CouponProvisionMembers: "/payment/coupon-provision-members",
  CouponProvision: "/payment/coupon-provision",

  ActivityPeriod: "/activity-period",

  Signin: "/sign-in",

  AuthorizedSuccess: "/social-login/redirect",
  AuthorizedError: "/authorized-error",
  GithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  Error: "/error",
} as const;

export default RoutePath;
