import { BASE_URL } from "@/environment";

const RoutePath = {
  Index: "/",
  AllMembers: "/member/all",
  PendingMembers: "/member/pending",
  GrantedMembers: "/member/granted",
  GrantableMembers: "/member/grantable",
  PaymentStatusMembers: "/member/payment-status",

  Signin: "/sign-in",

  AuthorizedSuccess: "/social-login/redirect",
  AuthorizedError: "/authorized-error",
  GithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  Error: "/error",
} as const;

export default RoutePath;
