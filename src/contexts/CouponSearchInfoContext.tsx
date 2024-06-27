import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { SearchVariantType } from "@/types/entities/search";

type CouponSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
};

export const CouponSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
});

export default function CouponSearchInfoContextProvider({
  children,
}: CouponSearchInfoContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");

  return (
    <CouponSearchInfoDispatchContext.Provider value={{ setSearchText, setSearchVariant }}>
      <CouponSearchInfoStateContext.Provider value={{ searchText, searchVariant }}>
        {children}
      </CouponSearchInfoStateContext.Provider>
    </CouponSearchInfoDispatchContext.Provider>
  );
}
