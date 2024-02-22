const RoutePath = {
  Index: "/",
  AllMembers: "/member/all",
  PendingMembers: "/member/pending",
  PaymentStatusMembers: "/member/payment-status",

  Signin: "/sign-in",

  AuthorizedSuccess: "/authorized-success",
  AuthorizedError: "/authorized-error",

  Error: "/error",
} as const;

export default RoutePath;
