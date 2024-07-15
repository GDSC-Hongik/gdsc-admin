import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType } from "@/types/entities/common";
import { MemberVariantType, SearchInfoType } from "@/types/entities/member";

type SearchStateType = {
  searchInfo: SearchInfoType;
  memberVariant: MemberVariantType;
  paginationModel: PaginationModelType;
};

type SearchDispatchType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setMemberVariant: Dispatch<SetStateAction<MemberVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type PendingMembersSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  searchInfo: {
    text: "",
    variant: "studentId",
  },
  memberVariant: "ASSOCIATE",
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const PendingMembersSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const PendingMembersSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchInfo: () => {},
  setMemberVariant: () => {},
  setPaginationModel: () => {},
});

export default function PendingMembersSearchInfoContextProvider({
  children,
}: PendingMembersSearchInfoStateContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [memberVariant, setMemberVariant] = useState<MemberVariantType>(defaultState.memberVariant);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>(
    defaultState.paginationModel,
  );

  return (
    <PendingMembersSearchInfoDispatchContext.Provider
      value={{ setSearchInfo, setMemberVariant, setPaginationModel }}
    >
      <PendingMembersSearchInfoStateContext.Provider
        value={{ searchInfo, memberVariant, paginationModel }}
      >
        {children}
      </PendingMembersSearchInfoStateContext.Provider>
    </PendingMembersSearchInfoDispatchContext.Provider>
  );
}
