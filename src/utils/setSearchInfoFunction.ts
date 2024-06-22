import { Dispatch, SetStateAction } from "react";
import { paymentStatusTableTitle } from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import { SearchVariantType } from "@/types/entities/context";

type SetSearchInfoFunctionType = <T extends ManagementVariant>(
  setSelectedValue: Dispatch<SetStateAction<string>>,
  setSearchVariant: (variant: SearchVariantType<T>) => void,
  targetIndex: number,
) => void;

export const setSearchInfo: Record<"paymentStatus", SetSearchInfoFunctionType> = {
  paymentStatus: (setSelectedValue, setSearchVariant, targetIndex) => {
    setSelectedValue(paymentStatusTableTitle[targetIndex]["value"]);
    setSearchVariant?.(
      paymentStatusTableTitle.slice(0, 5)[targetIndex][
        "type"
      ] as SearchVariantType<"paymentStatus">,
    );
  },
};
