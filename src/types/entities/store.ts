import { ManagementVariant } from "./member";
import { AllMembersStoreType } from "@/store/allMembers";
import { GrantableMembersStoreType } from "@/store/grantableMembers";
import { GrantedMembersStoreType } from "@/store/grantedMembers";
import { PaymentStatusMembersStoreType } from "@/store/paymentStatusMembers";
import { PendingMembersStoreType } from "@/store/pendingMembers";

type CommonMembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
  "paymentStatus",
];

export type SearchVariantType<T extends ManagementVariant> = T extends
  | "pendingMember"
  | "paymentStatus"
  ? Exclude<CommonMembersSearchVariantType, "department" | "email" | "paymentStatus">[number] | null
  : Exclude<CommonMembersSearchVariantType, "paymentStatus">[number] | null;

export type SearchInfoType<T extends ManagementVariant> = {
  text: string;
  variant: SearchVariantType<T>;
};

export type MemberStoreType =
  | AllMembersStoreType
  | GrantedMembersStoreType
  | GrantableMembersStoreType
  | PendingMembersStoreType
  | PaymentStatusMembersStoreType;
