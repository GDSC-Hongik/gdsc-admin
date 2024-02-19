const RoutePath = {
  Index: "/",
  AllMembers: "/",
  PendingMembers: "/member/pending",
  PaymentStatus: "/payment-status",

  Signin: "/sign-in",

  AuthorizedSuccess: "/authorized-success",
  AuthorizedError: "/authorized-error",

  Error: "/error",
} as const;

export default RoutePath;
