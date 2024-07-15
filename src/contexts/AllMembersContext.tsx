import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { SearchInfoType } from "@/types/entities/member";

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

export const AllMembersSearchInfoStateContext =
  createContext<AllMembersStateContextType>(defaultState);

export const AllMembersSearchInfoDispatchContext = createContext<AllMembersStateDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function AllMembersSearchInfoContextProvider({
  children,
}: AllMembersContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>(
    defaultState.paginationModel,
  );

  return (
    <AllMembersSearchInfoDispatchContext.Provider value={{ setSearchInfo, setPaginationModel }}>
      <AllMembersSearchInfoStateContext.Provider
        value={{
          searchInfo,
          paginationModel,
        }}
      >
        {children}
      </AllMembersSearchInfoStateContext.Provider>
    </AllMembersSearchInfoDispatchContext.Provider>
  );
}
