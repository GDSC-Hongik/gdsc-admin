import { MemberVariantType, SearchVariantType } from "@/types/entities/search";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType<"pendingMember">;
  memberVariant: MemberVariantType;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType<"pendingMember">>>;
  setMemberVariant: Dispatch<SetStateAction<MemberVariantType>>;
};

type PendingMembersSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
  memberVariant: "associate",
};

export const PendingMembersSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const PendingMembersSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
  setMemberVariant: () => {},
});

export default function PendingMembersSearchInfoContextProvider({
  children,
}: PendingMembersSearchInfoStateContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] =
    useState<SearchVariantType<"pendingMember">>("studentId");
  const [memberVariant, setMemberVariant] = useState<MemberVariantType>("associate");

  return (
    <PendingMembersSearchInfoDispatchContext.Provider
      value={{ setSearchText, setMemberVariant, setSearchVariant }}
    >
      <PendingMembersSearchInfoStateContext.Provider
        value={{ searchText, searchVariant, memberVariant }}
      >
        {children}
      </PendingMembersSearchInfoStateContext.Provider>
    </PendingMembersSearchInfoDispatchContext.Provider>
  );
}
