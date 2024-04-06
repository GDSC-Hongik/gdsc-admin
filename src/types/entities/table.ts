import { ManagementVariant } from "./member";
import { SearchVariantType } from "./store";

export type MemberTableTitleType = {
  value: string;
  name: string;
  type: SearchVariantType<ManagementVariant>;
}[];

export type DepartmentType = { code: string; name: string };

export type TableRatioType = "title" | "cell";
