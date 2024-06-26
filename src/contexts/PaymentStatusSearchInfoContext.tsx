import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchVariantType } from "@/types/entities/search";

type PaymentStatusSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

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

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const PaymentStatusSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const PaymentStatusSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setPaginationModel: () => {},
});

export default function PaymentStatusSearchInfoContextProvider({
  children,
}: PaymentStatusSearchInfoContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType>("studentId");
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <PaymentStatusSearchInfoDispatchContext.Provider
      value={{ setSearchText, setSearchVariant, setPaginationModel }}
    >
      <PaymentStatusSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, paginationModel }}
      >
        {children}
      </PaymentStatusSearchInfoStateContext.Provider>
    </PaymentStatusSearchInfoDispatchContext.Provider>
  );
}
