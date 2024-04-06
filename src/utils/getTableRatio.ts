import {
  allMemberTableWidthRatio,
  grantableMemberTableWidthRatio,
  paymentStatusTableWidthRatio,
  pendingMemberModalWidthRatio,
  pendingMemberTableWidthRatio,
} from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import { TableRatioType } from "@/types/entities/table";

const tableRatioMapping = {
  allMember: allMemberTableWidthRatio,
  grantedMember: allMemberTableWidthRatio,
  grantableMember: grantableMemberTableWidthRatio,
  paymentStatus: paymentStatusTableWidthRatio,
  pendingMember: pendingMemberTableWidthRatio,
};

export const getTableRatio = (
  option: string,
  ratioType: TableRatioType,
  variant: ManagementVariant,
  isModal: boolean = false,
) => {
  const tableRatio =
    variant === "pendingMember" && isModal
      ? pendingMemberModalWidthRatio
      : tableRatioMapping[variant];

  return tableRatio[ratioType][option] ?? tableRatio[ratioType]["default"];
};
