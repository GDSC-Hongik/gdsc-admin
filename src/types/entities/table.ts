import { SearchVariantType } from "./member";

export type MemberInfoSelectMenuType = {
  value: string;
  name: string;
  type: SearchVariantType;
}[];

export type MemberTypeSelectMenuType = {
  value: string;
  name: string;
  type: "GUEST" | "ASSOCIATE";
}[];

export type DepartmentType = { code: string; name: string };
