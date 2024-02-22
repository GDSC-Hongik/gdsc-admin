import { AllMemberInfoType, PendingMemberInfoType, StatusType } from "@types/entities/member";

export type AllMemberListDtoType = AllMemberInfoType[];

export type PendingMemberListDtoType = PendingMemberInfoType[];
export type GrantPendingMemberRequestBodyDtoType = {
  memberIdList: number[];
};
export type GrantPendingMemberDtoType = {
  grantedMembers: string[];
  notGrantedMembers: string[];
};

export type PaymentStatusMemberListDtoType = PaymentStatusInfoType[];
export type MemberPaymentStatusDtoType = StatusType;