import { MemberInfoType, StatusType } from "@/types/entities/member";
import { PaginationElementType } from "./common";

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
