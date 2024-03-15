import { create } from "zustand";
import { AllMembersSearchVariantType } from "@/types/entities/store";

type SearchInfoType = {
  text: string;
  variant: AllMembersSearchVariantType[number] | null;
};

export const allMembersStore = create(set => ({
  searchInfo: {
    text: "",
    variant: null,
  },
  setSearchText: (text: string) =>
    set((prevSearchInfo: SearchInfoType) => ({
      searchInfo: {
        ...prevSearchInfo,
        text,
      },
    })),
  setSearchVariant: (variant: string) =>
    set((prevSearchInfo: SearchInfoType) => ({
      searchInfo: {
        ...prevSearchInfo,
        variant,
      },
    })),
}));
