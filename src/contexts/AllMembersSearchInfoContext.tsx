import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { SearchInfoType } from "@/types/entities/member";

type AllMembersSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  searchInfo: SearchInfoType;
  paginationModel: PaginationModelType;
};

type SearchDispatchType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
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

export const AllMembersSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const AllMembersSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchInfo: () => {},
  setPaginationModel: () => {},
});

export default function AllMembersSearchInfoContextProvider({
  children,
}: AllMembersSearchInfoContextProviderPropsType) {
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
