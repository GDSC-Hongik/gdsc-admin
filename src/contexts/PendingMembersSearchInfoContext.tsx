import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { MemberVariantType, PaginationModelType, SearchVariantType } from "@/types/entities/search";

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType<"pendingMember">;
  memberVariant: MemberVariantType;
  paginationModel: PaginationModelType;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType<"pendingMember">>>;
  setMemberVariant: Dispatch<SetStateAction<MemberVariantType>>;
  setPaginationModel: Dispatch<SetStateAction<PaginationModelType>>;
};

type PendingMembersSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  memberVariant: "ASSOCIATE",
  paginationModel: {
    pageSize: 5,
    page: 0,
  },
};

export const PendingMembersSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const PendingMembersSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setMemberVariant: () => {},
  setPaginationModel: () => {},
});

export default function PendingMembersSearchInfoContextProvider({
  children,
}: PendingMembersSearchInfoStateContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] =
    useState<SearchVariantType<"pendingMember">>("studentId");
  const [memberVariant, setMemberVariant] = useState<MemberVariantType>("ASSOCIATE");
  const [paginationModel, setPaginationModel] = useState<PaginationModelType>({
    pageSize: 5,
    page: 0,
  });

  return (
    <PendingMembersSearchInfoDispatchContext.Provider
      value={{ setSearchText, setMemberVariant, setSearchVariant, setPaginationModel }}
    >
      <PendingMembersSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, memberVariant, paginationModel }}
      >
        {children}
      </PendingMembersSearchInfoStateContext.Provider>
    </PendingMembersSearchInfoDispatchContext.Provider>
  );
}
