import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { SearchVariantType } from "@/types/entities/coupon";

type SearchStateType = {
  searchInfo: {
    text?: string | boolean;
    variant: SearchVariantType;
  };
  paginationModel: PaginationModelType;
};

type SearchDispatchType = {
  setSearchInfo: Dispatch<
    SetStateAction<{
      text?: string | boolean;
      variant: SearchVariantType;
    }>
  >;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type IssuedCouponSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  searchInfo: {
    text: "",
    variant: "studentId",
  },
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const IssuedCouponSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const IssuedCouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function IssuedCouponSearchInfoContextProvider({
  children,
}: IssuedCouponSearchInfoStateContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<{
    text?: string | boolean;
    variant: SearchVariantType;
  }>({
    text: "",
    variant: "studentId",
  });
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <IssuedCouponSearchInfoDispatchContext.Provider value={{ setSearchInfo, setPaginationModel }}>
      <IssuedCouponSearchInfoStateContext.Provider value={{ searchInfo, paginationModel }}>
        {children}
      </IssuedCouponSearchInfoStateContext.Provider>
    </IssuedCouponSearchInfoDispatchContext.Provider>
  );
}
