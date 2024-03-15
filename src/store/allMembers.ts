import { create } from "zustand";
import { SearchInfoType, SearchVariantType } from "@/types/entities/store";

export type AllMembersStoreType = {
  searchInfo: SearchInfoType<"allMember">;
  setSearchText: (text: string) => void;
  setSearchVariant: (variant: SearchVariantType<"allMember">) => void;
};

export const allMembersStore = create<AllMembersStoreType>(set => ({
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
  setSearchVariant: (variant: SearchVariantType<"allMember">) =>
    set(prevSearchInfo => ({
      ...prevSearchInfo,
      searchInfo: {
        ...prevSearchInfo.searchInfo,
        variant,
      },
    })),
}));
