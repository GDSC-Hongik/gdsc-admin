import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

export type PaymentStatusMembersStoreType = {
  searchInfo: SearchInfoType<"paymentStatus">;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType<"paymentStatus">) => void;
};

export const usePaymentStatusMembersStore = create<PaymentStatusMembersStoreType>(set => ({
  searchInfo: {
    text: "",
    variant: null,
  },
  setSearchText: (text: string) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        text,
      },
    })),
  setSearchVariant: (variant: SearchVariantType<"paymentStatus">) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
