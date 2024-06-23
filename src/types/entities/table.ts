import { ManagementVariant } from "./member";
import { SearchVariantType } from "./search";

export type MemberInfoSelectMenuType = {
  value: string;
  name: string;
  type: SearchVariantType<ManagementVariant>;
}[];

export type MemberTypeSelectMenuType = {
  value: string;
  name: string;
  type: "guest" | "associate";
}[];

export type DepartmentType = { code: string; name: string };
