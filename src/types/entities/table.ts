import { ManagementVariant } from "./member";
import { SearchVariantType } from "./store";

export type MemberTableTitleType = {
  value: string;
  name: string;
  type: SearchVariantType<ManagementVariant>;
}[];
