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
  type: "GUEST" | "ASSOCIATE";
}[];

export type DepartmentType = { code: string; name: string };
