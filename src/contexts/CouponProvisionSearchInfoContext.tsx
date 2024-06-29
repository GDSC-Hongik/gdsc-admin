import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchVariantType } from "@/types/entities/search";

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
  paginationModel: PaginationModelType;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type CouponProvisionSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const CouponProvisionSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponProvisionSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setPaginationModel: () => {},
});

export default function CouponProvisionSearchInfoContextProvider({
  children,
}: CouponProvisionSearchInfoStateContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <CouponProvisionSearchInfoDispatchContext.Provider
      value={{ setSearchText, setSearchVariant, setPaginationModel }}
    >
      <CouponProvisionSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, paginationModel }}
      >
        {children}
      </CouponProvisionSearchInfoStateContext.Provider>
    </CouponProvisionSearchInfoDispatchContext.Provider>
  );
}
