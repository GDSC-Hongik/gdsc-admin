import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { SearchVariantType } from "@/types/entities/search";

type CouponSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
  modalOpen: boolean;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  modalOpen: false,
};

export const CouponSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setModalOpen: () => {},
});

export default function CouponSearchInfoContextProvider({
  children,
}: CouponSearchInfoContextProviderPropsType) {
  const [searchText, setSearchText] = useState("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CouponSearchInfoDispatchContext.Provider
      value={{ setSearchText, setSearchVariant, setModalOpen }}
    >
      <CouponSearchInfoStateContext.Provider value={{ searchText, searchVariant, modalOpen }}>
        {children}
      </CouponSearchInfoStateContext.Provider>
    </CouponSearchInfoDispatchContext.Provider>
  );
}
