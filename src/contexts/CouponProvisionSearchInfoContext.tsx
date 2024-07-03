import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchVariantType } from "@/types/entities/search";

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
  paginationModel: PaginationModelType;
  selectedCouponId: number | 0;
  provisionModalOpen: boolean;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
  setSelectedCouponId: Dispatch<SetStateAction<number | 0>>;
  setProvisionModalOpen: Dispatch<SetStateAction<boolean>>;
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
  selectedCouponId: 0,
  provisionModalOpen: false,
};

export const CouponProvisionSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponProvisionSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setPaginationModel: () => {},
  setSelectedCouponId: () => {},
  setProvisionModalOpen: () => {},
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
  const [selectedCouponId, setSelectedCouponId] = useState<number | 0>(0);
  const [provisionModalOpen, setProvisionModalOpen] = useState(false);

  return (
    <CouponProvisionSearchInfoDispatchContext.Provider
      value={{
        setSearchText,
        setSearchVariant,
        setPaginationModel,
        setSelectedCouponId,
        setProvisionModalOpen,
      }}
    >
      <CouponProvisionSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, paginationModel, selectedCouponId, provisionModalOpen }}
      >
        {children}
      </CouponProvisionSearchInfoStateContext.Provider>
    </CouponProvisionSearchInfoDispatchContext.Provider>
  );
}
