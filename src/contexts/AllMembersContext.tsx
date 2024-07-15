import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchInfoType } from "@/types/entities/common";

type AllMembersContextProviderPropsType = {
  children: ReactNode;
};

type AllMembersStateContextType = {
  searchInfo: SearchInfoType;
  paginationModel: PaginationModelType;
};

type AllMembersStateDispatchType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

const defaultState: AllMembersStateContextType = {
  searchInfo: {
    text: "",
    variant: "studentId",
  },
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const AllMembersStateContext =
  createContext<AllMembersStateContextType>(defaultState);

export const AllMembersDispatchContext = createContext<AllMembersStateDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function AllMembersContextProvider({
  children,
}: AllMembersContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>(
    defaultState.paginationModel,
  );

  return (
    <AllMembersDispatchContext.Provider value={{ setSearchInfo, setPaginationModel }}>
      <AllMembersStateContext.Provider
        value={{
          searchInfo,
          paginationModel,
        }}
      >
        {children}
      </AllMembersStateContext.Provider>
    </AllMembersDispatchContext.Provider>
  );
}
