import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { SearchInfoType } from "@/types/entities/payment";

type PaymentStatusContextProviderPropsType = {
  children: ReactNode;
};

type PaymentStatusStateContextType = {
  searchInfo: SearchInfoType;
  paginationModel: PaginationModelType;
};

type PaymentStatusStateDispatchType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

const defaultState: PaymentStatusStateContextType = {
  searchInfo: {
    text: "",
    variant: "orderId",
  },
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const PaymentStatusStateContext = createContext<PaymentStatusStateContextType>(defaultState);

export const PaymentStatusDispatchContext = createContext<PaymentStatusStateDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function PaymentStatusContextProvider({
  children,
}: PaymentStatusContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <PaymentStatusDispatchContext.Provider value={{ setSearchInfo, setPaginationModel }}>
      <PaymentStatusStateContext.Provider value={{ searchInfo, paginationModel }}>
        {children}
      </PaymentStatusStateContext.Provider>
    </PaymentStatusDispatchContext.Provider>
  );
}
