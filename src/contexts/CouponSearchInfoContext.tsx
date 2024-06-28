import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { SearchVariantType } from "@/types/entities/search";

type CouponSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
  createCouponModalOpen: boolean;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
  setCreateCouponModalOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  createCouponModalOpen: false,
};

export const CouponSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setCreateCouponModalOpen: () => {},
});

export default function CouponSearchInfoContextProvider({
  children,
}: CouponSearchInfoContextProviderPropsType) {
  const [searchText, setSearchText] = useState("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");
  const [createCouponModalOpen, setCreateCouponModalOpen] = useState(false);

  return (
    <CouponSearchInfoDispatchContext.Provider
      value={{ setSearchText, setSearchVariant, setCreateCouponModalOpen }}
    >
      <CouponSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, createCouponModalOpen }}
      >
        {children}
      </CouponSearchInfoStateContext.Provider>
    </CouponSearchInfoDispatchContext.Provider>
  );
}
