import {
  AllMemberInfoType,
  GrantableMemberInfoType,
  GrantedMemberInfoType,
  PaymentStatusInfoType,
  PendingMemberInfoType,
  StatusType,
} from "@/types/entities/member";

type PaginationElementType = {
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
  content: AllMemberInfoType[];
} & PaginationElementType;

export type DepartmentListResponseDtoType = {
  code: string;
  name: string;
};

export type PendingMemberListResponseDtoType = {
  content: PendingMemberInfoType[];
} & PaginationElementType;

export type GrantPendingMemberRequestDtoType = {
  memberIdList: number[];
};

export type GrantPendingMemberResponseDtoType = {
  grantedMembers: string[];
  notGrantedMembers: string[];
};

export type GrantableMemberResponseDtoType = {
  content: GrantableMemberInfoType[];
} & PaginationElementType;

export type PaymentStatusMemberListResponseDtoType = {
  content: PaymentStatusInfoType[];
} & PaginationElementType;

export type MemberPaymentStatusResponseDtoType = StatusType;

export type GrantedMemberListResponseDtoType = {
  content: GrantedMemberInfoType[];
} & PaginationElementType;
