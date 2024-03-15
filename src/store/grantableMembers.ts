import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

type GrantableMembersStoreType = {
  searchInfo: SearchInfoType;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType) => void;
};

export const grantableMembersStore = create<GrantableMembersStoreType>(set => ({
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
  setSearchVariant: (variant: SearchVariantType) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
