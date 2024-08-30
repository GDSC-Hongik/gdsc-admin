import { PaginationElementType } from "./common";
import { CouponType, IssuedCouponType } from "../entities/coupon";
import { MemberInfoType } from "../entities/member";

export type CouponListResponseDtoType = CouponType[];

export type IssuedCouponListResponseDtoType = {
  content: IssuedCouponType[];
} & PaginationElementType;

export type CouponProvisionMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;
