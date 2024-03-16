import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

export type GrantedMembersStoreType = {
  searchInfo: SearchInfoType<"grantedMember">;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType<"grantedMember">) => void;
};

export const useGrantedMembersStore = create<GrantedMembersStoreType>(set => ({
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
  setSearchVariant: (variant: SearchVariantType<"grantedMember">) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
