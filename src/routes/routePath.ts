const RoutePath = {
  Index: "/",
  AllMembers: "/member/all",
  PendingMembers: "/member/pending",
  GrantableMembers: "/member/grantable",
  PaymentStatusMembers: "/member/payment-status",

  Signin: "/sign-in",

  AuthorizedSuccess: "/social-login/redirect",

  Error: "/error",
} as const;

export default RoutePath;
