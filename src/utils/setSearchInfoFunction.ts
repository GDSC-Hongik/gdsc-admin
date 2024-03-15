import { Dispatch, SetStateAction } from "react";
import {
  allMemberTableTitle,
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

export const setSearchInfoFunctions: Record<ManagementVariant, SetSearchInfoFunctionType> = {
  allMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"allMember">,
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
    setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      paymentStatusTableTitle.slice(0, 5)[targetIndex][
        "type"
      ] as SearchVariantType<"paymentStatus">,
    );
  },
  grantableMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantableMember">,
    );
  },
  grantedMember: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantedMember">,
    );
  },
};
