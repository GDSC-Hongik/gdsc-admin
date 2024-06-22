import { ManagementVariant } from "./member";
import { PaymentStatusMembersStoreType } from "@/store/paymentStatusMembers";

type MembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
  "paymentStatus",
];

export type SearchVariantType<T extends ManagementVariant> = T extends "paymentStatus"
  ? Exclude<MembersSearchVariantType, "department" | "email" | "paymentStatus">[number] | null
  : Exclude<MembersSearchVariantType, "paymentStatus">[number] | null;

export type SearchInfoType<T extends ManagementVariant> = {
  text: string;
  variant: SearchVariantType<T>;
};

export type MemberStoreType = PaymentStatusMembersStoreType;

export type MemberVariantType = "associate" | "guest";

