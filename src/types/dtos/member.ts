import {
  AllMemberInfoType,
  GrantableMemberInfoType,
  PaymentStatusInfoType,
  PendingMemberInfoType,
  StatusType,
} from "@/types/entities/member";

export type AllMemberListDtoType = {
  content: AllMemberInfoType[];
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

export type DepartmentListDtoType = {
  code: string;
  name: string;
};

export type PendingMemberListDtoType = PendingMemberInfoType[];
export type GrantPendingMemberRequestBodyDtoType = {
  memberIdList: number[];
};
export type GrantPendingMemberDtoType = {
  grantedMembers: string[];
  notGrantedMembers: string[];
};

export type GrantableMemberDtoType = GrantableMemberInfoType[];

export type PaymentStatusMemberListDtoType = PaymentStatusInfoType[];
export type MemberPaymentStatusDtoType = StatusType;
