import { ManagementVariant } from "./member";

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

export type MemberVariantType = "ASSOCIATE" | "GUEST";

export type PaginationModelType = {
  pageSize: number;
  page: number;
};
