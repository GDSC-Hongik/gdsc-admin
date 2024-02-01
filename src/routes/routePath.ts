const RoutePath = {
  Index: "/",
  Member: "/",

  Signin: "/sign-in",

  AuthorizedSuccess: "/authorized_success",
  AuthorizedError: "/authorized_error",

  Error: "/error",
  NotFoundError: "/404",
} as const;

export default RoutePath;
