import { ManagementVariant } from "./member";
import { SearchVariantType } from "./store";
import { pendingMemberModalWidthRatio } from "@/constants/table";

export type MemberTableTitleType = {
  value: string;
  name: string;
  type: SearchVariantType<ManagementVariant>;
}[];

export type DepartmentType = { code: string; name: string };

export type PendingMemberModalWidthRatioKeyType = keyof typeof pendingMemberModalWidthRatio;
