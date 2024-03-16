import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

export type GrantableMembersStoreType = {
  searchInfo: SearchInfoType<"grantableMember">;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType<"grantableMember">) => void;
};

export const useGrantableMembersStore = create<GrantableMembersStoreType>(set => ({
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
  setSearchVariant: (variant: SearchVariantType<"grantableMember">) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
