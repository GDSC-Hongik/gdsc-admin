import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchInfoType } from "@/types/entities/common";

type CouponProvisionStateContextType = {
  searchInfo: SearchInfoType;
  paginationModel: PaginationModelType;
  selectedCouponId: number | 0;
  provisionModalOpen: boolean;
};

type CouponProvisionDispatchContextType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
  setSelectedCouponId: Dispatch<SetStateAction<number | 0>>;
  setProvisionModalOpen: Dispatch<SetStateAction<boolean>>;
};

type CouponProvisionContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: CouponProvisionStateContextType = {
  searchInfo: {
    text: "",
    variant: "studentId",
  },
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
  selectedCouponId: 0,
  provisionModalOpen: false,
};

export const CouponProvisionStateContext =
  createContext<CouponProvisionStateContextType>(defaultState);

export const CouponProvisionDispatchContext =
  createContext<CouponProvisionDispatchContextType>({
    setSearchInfo: () => {},
    setPaginationModel: () => {},
    setSelectedCouponId: () => {},
    setProvisionModalOpen: () => {},
  });

export default function CouponProvisionContextProvider({
  children,
}: CouponProvisionContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });
  const [selectedCouponId, setSelectedCouponId] = useState<number | 0>(0);
  const [provisionModalOpen, setProvisionModalOpen] = useState(false);

  return (
    <CouponProvisionDispatchContext.Provider
      value={{
        setSearchInfo,
        setPaginationModel,
        setSelectedCouponId,
        setProvisionModalOpen,
      }}
    >
      <CouponProvisionStateContext.Provider
        value={{ searchInfo, paginationModel, selectedCouponId, provisionModalOpen }}
      >
        {children}
      </CouponProvisionStateContext.Provider>
    </CouponProvisionDispatchContext.Provider>
  );
}
