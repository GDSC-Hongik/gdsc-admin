import { ManagementVariant } from "./member";

type CommonMembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
];

export type SearchVariantType<T extends ManagementVariant> = T extends "pendingMember"
  ? Exclude<CommonMembersSearchVariantType, "department" | "email">[number] | null
  : CommonMembersSearchVariantType[number] | null;

export type SearchInfoType<T extends ManagementVariant> = {
  text: string;
  variant: SearchVariantType<T>;
};