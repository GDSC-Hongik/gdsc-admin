import {
  allMemberTableWidthRatio,
  grantableMemberTableWidthRatio,
  paymentStatusTableWidthRatio,
  pendingMemberModalWidthRatio,
  pendingMemberTableWidthRatio,
} from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import { TableRatioType } from "@/types/entities/table";

export const getTableRatio = (
  option: string,
  ratioType: TableRatioType,
  variant: ManagementVariant,
  isModal: boolean = false,
) => {
  if (variant === "pendingMember" && isModal) {
    return (
      pendingMemberModalWidthRatio[ratioType][option] ??
      pendingMemberModalWidthRatio[ratioType]["default"]
    );
  } else if (variant === "allMember" || variant === "grantedMember") {
    return (
      allMemberTableWidthRatio[ratioType][option] ?? allMemberTableWidthRatio[ratioType]["default"]
    );
  } else if (variant === "grantableMember") {
    return (
      grantableMemberTableWidthRatio[ratioType][option] ??
      grantableMemberTableWidthRatio[ratioType]["default"]
    );
  } else if (variant === "paymentStatus") {
    return (
      paymentStatusTableWidthRatio[ratioType][option] ??
      paymentStatusTableWidthRatio[ratioType]["default"]
    );
  } else if (variant === "pendingMember") {
    return (
      pendingMemberTableWidthRatio[ratioType][option] ??
      pendingMemberTableWidthRatio[ratioType]["default"]
    );
  }
};
