const RoutePath = {
  Index: "/",
  Member: "/",

  Signin: "/sign-in",

  AuthorizedSuccess: "/authorized-success",
  AuthorizedError: "/authorized-error",

  Error: "/error",
  NotFoundError: "/404",
} as const;

export default RoutePath;
