import { Dispatch, SetStateAction } from "react";
import {
  commonMemberTableTitle,
  paymentStatusTableTitle,
  pendingMemberTableTitle,
} from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import { SearchVariantType } from "@/types/entities/store";

type SetSearchInfoFunctionType = <T extends ManagementVariant>(
  setSelectedValue: Dispatch<SetStateAction<string>>,
  setSearchVariant: (variant: SearchVariantType<T>) => void,
  targetIndex: number,
) => void;

export const setSearchInfo: Record<ManagementVariant, SetSearchInfoFunctionType> = {
  allMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"allMember">,
    );
  },
  pendingMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(pendingMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      pendingMemberTableTitle.slice(0, 5)[targetIndex][
        "type"
      ] as SearchVariantType<"pendingMember">,
    );
  },
  paymentStatus: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(paymentStatusTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      paymentStatusTableTitle.slice(0, 5)[targetIndex][
        "type"
      ] as SearchVariantType<"paymentStatus">,
    );
  },
  grantableMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantableMember">,
    );
  },
  grantedMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantedMember">,
    );
  },
};
