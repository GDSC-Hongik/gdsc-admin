import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchVariantType } from "@/types/entities/search";

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType;
  paginationModel: PaginationModelType;
  selectedCoupon: string;
  provisionModalOpen: boolean;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
  setSelectedCoupon: Dispatch<SetStateAction<string>>;
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
  selectedCoupon: "",
  provisionModalOpen: false,
};

export const CouponProvisionSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponProvisionSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setPaginationModel: () => {},
  setSelectedCoupon: () => {},
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
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [provisionModalOpen, setProvisionModalOpen] = useState(false);

  return (
    <CouponProvisionSearchInfoDispatchContext.Provider
      value={{
        setSearchText,
        setSearchVariant,
        setPaginationModel,
        setSelectedCoupon,
        setProvisionModalOpen,
      }}
    >
      <CouponProvisionSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, paginationModel, selectedCoupon, provisionModalOpen }}
      >
        {children}
      </CouponProvisionSearchInfoStateContext.Provider>
    </CouponProvisionSearchInfoDispatchContext.Provider>
  );
}
