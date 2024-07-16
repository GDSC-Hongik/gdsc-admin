import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { CouponSearchInfoContextType } from "@/types/entities/coupon";

type IssuedCouponStateContextType = {
  searchInfo: CouponSearchInfoContextType;
  paginationModel: PaginationModelType;
};

type IssuedCouponStateDispatchType = {
  setSearchInfo: Dispatch<SetStateAction<CouponSearchInfoContextType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type IssuedCouponContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: IssuedCouponStateContextType = {
  searchInfo: {
    text: "",
    variant: "studentId",
  },
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const IssuedCouponStateContext =
  createContext<IssuedCouponStateContextType>(defaultState);

export const IssuedCouponDispatchContext = createContext<IssuedCouponStateDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function IssuedCouponContextProvider({
  children,
}: IssuedCouponContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<CouponSearchInfoContextType>({
    text: "",
    variant: "studentId",
  });
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <IssuedCouponDispatchContext.Provider value={{ setSearchInfo, setPaginationModel }}>
      <IssuedCouponStateContext.Provider value={{ searchInfo, paginationModel }}>
        {children}
      </IssuedCouponStateContext.Provider>
    </IssuedCouponDispatchContext.Provider>
  );
}
