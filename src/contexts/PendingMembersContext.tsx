import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PaginationModelType, SearchInfoType } from "@/types/entities/common";
import { MemberVariantType } from "@/types/entities/member";

type PendingMembersStateContextType = {
  searchInfo: SearchInfoType;
  memberVariant: MemberVariantType;
  paginationModel: PaginationModelType;
};

type PendingMembersDispatchContextType = {
  setSearchInfo: Dispatch<SetStateAction<SearchInfoType>>;
  setMemberVariant: Dispatch<SetStateAction<MemberVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type PendingMembersContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: PendingMembersStateContextType = {
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

export const PendingMembersStateContext =
  createContext<PendingMembersStateContextType>(defaultState);

export const PendingMembersDispatchContext = createContext<PendingMembersDispatchContextType>({
  setSearchInfo: () => {},
  setMemberVariant: () => {},
  setPaginationModel: () => {},
});

export default function PendingMembersContextProvider({
  children,
}: PendingMembersContextProviderPropsType) {
  const [searchInfo, setSearchInfo] = useState<SearchInfoType>(defaultState.searchInfo);
  const [memberVariant, setMemberVariant] = useState<MemberVariantType>(defaultState.memberVariant);
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>(
    defaultState.paginationModel,
  );

  return (
    <PendingMembersDispatchContext.Provider
      value={{ setSearchInfo, setMemberVariant, setPaginationModel }}
    >
      <PendingMembersStateContext.Provider value={{ searchInfo, memberVariant, paginationModel }}>
        {children}
      </PendingMembersStateContext.Provider>
    </PendingMembersDispatchContext.Provider>
  );
}
