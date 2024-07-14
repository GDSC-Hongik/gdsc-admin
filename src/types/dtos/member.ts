import { PaginationElementType } from "./common";
import { MemberInfoType, StatusType } from "@/types/entities/member";

export type AllMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type DepartmentListResponseDtoType = {
  code: string;
  name: string;
};

export type PendingMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type PaymentStatusMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type MemberPaymentStatusResponseDtoType = StatusType;
