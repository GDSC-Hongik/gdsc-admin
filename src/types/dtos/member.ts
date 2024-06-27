import { MemberInfoType, StatusType } from "@/types/entities/member";

export type PaginationElementType = {
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

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

export type GrantPendingMemberRequestDtoType = {
  memberIdList: number[];
};

export type GrantPendingMemberResponseDtoType = {
  grantedMembers: string[];
  notGrantedMembers: string[];
};

export type PaymentStatusMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type MemberPaymentStatusResponseDtoType = StatusType;
