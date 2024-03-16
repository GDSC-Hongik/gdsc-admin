import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

export type PendingMembersStoreType = {
  searchInfo: SearchInfoType<"pendingMember">;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType<"pendingMember">) => void;
};

export const usePendingMembersStore = create<PendingMembersStoreType>(set => ({
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
  setSearchVariant: (variant: SearchVariantType<"pendingMember">) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
