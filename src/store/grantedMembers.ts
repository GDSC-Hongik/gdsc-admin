import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

type GrantedMembersStoreType = {
  searchInfo: SearchInfoType;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType) => void;
};

export const grantedMembersStore = create<GrantedMembersStoreType>(set => ({
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
