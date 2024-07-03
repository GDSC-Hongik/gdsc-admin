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

export type PaymentStatusMemberListResponseDtoType = {
  content: MemberInfoType[];
} & PaginationElementType;

export type MemberPaymentStatusResponseDtoType = StatusType;

export type DetailMemberInfoType = {
  name: string;
  studentId: string;
  phone: string;
  departmentName: string;
  email: string;
  discordUsername: string;
  nickname: string;
};

export type DetailMemberModalInfoType = {
  "이름": DetailMemberInfoType["name"];
  "학번": DetailMemberInfoType["studentId"];
  "전화번호": DetailMemberInfoType["phone"];
  "소속 학과": DetailMemberInfoType["departmentName"];
  "이메일": DetailMemberInfoType["email"];
  "디스코드 사용자명": DetailMemberInfoType["discordUsername"];
  "디스코드 별명": DetailMemberInfoType["nickname"];
};
