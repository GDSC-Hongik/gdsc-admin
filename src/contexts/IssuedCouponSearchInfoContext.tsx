import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { SearchVariantType } from "@/types/entities/member";

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

type IssuedCouponSearchInfoStateContextProviderPropsType = {
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

export const IssuedCouponSearchInfoStateContext =
  createContext<SearchStateType>(defaultState);

export const IssuedCouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setPaginationModel: () => {},
});

export default function IssuedCouponSearchInfoContextProvider({
  children,
}: IssuedCouponSearchInfoStateContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <IssuedCouponSearchInfoDispatchContext.Provider
      value={{ setSearchText, setSearchVariant, setPaginationModel }}
    >
      <IssuedCouponSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, paginationModel }}
      >
        {children}
      </IssuedCouponSearchInfoStateContext.Provider>
    </IssuedCouponSearchInfoDispatchContext.Provider>
  );
}
