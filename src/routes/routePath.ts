const RoutePath = {
  Index: "/",
  AllMembers: "/",
  PendingMembers: "/member/pending",

  Signin: "/sign-in",

  AuthorizedSuccess: "/authorized-success",
  AuthorizedError: "/authorized-error",

  Error: "/error",
} as const;

export default RoutePath;
