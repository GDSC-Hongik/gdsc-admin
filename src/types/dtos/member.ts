import {
  AllMemberInfoType,
  GrantableMemberInfoType,
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
}

export type AllMemberListDtoType = {
  content: AllMemberInfoType[];
} & PaginationElementType;

export type DepartmentListDtoType = {
  code: string;
  name: string;
};

export type PendingMemberListDtoType = {
  content: PendingMemberInfoType[];
} & PaginationElementType;
export type GrantPendingMemberRequestBodyDtoType = {
  memberIdList: number[];
};
export type GrantPendingMemberDtoType = {
  grantedMembers: string[];
  notGrantedMembers: string[];
};

export type GrantableMemberDtoType = {
  content: GrantableMemberInfoType[];
} & PaginationElementType;

export type PaymentStatusMemberListDtoType = {
  content: PaymentStatusInfoType[];
} & PaginationElementType;
export type MemberPaymentStatusDtoType = StatusType;
