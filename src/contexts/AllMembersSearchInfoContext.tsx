import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { SearchVariantType } from "@/types/entities/context";

type AllMembersSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  searchText: string;
  searchVariant: SearchVariantType<"allMember">;
};

type SearchDispatchType = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchVariant: Dispatch<SetStateAction<SearchVariantType<"allMember">>>;
};

const defaultState: SearchStateType = {
  searchText: "",
  searchVariant: "studentId",
};

export const AllMembersSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const AllMembersSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSearchText: () => {},
  setSearchVariant: () => {},
});

export default function AllMembersSearchInfoContextProvider({
  children,
}: AllMembersSearchInfoContextProviderPropsType) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVariant, setSearchVariant] = useState<SearchVariantType<"allMember">>("studentId");

  return (
    <AllMembersSearchInfoDispatchContext.Provider value={{ setSearchText, setSearchVariant }}>
      <AllMembersSearchInfoStateContext.Provider value={{ searchText, searchVariant }}>
        {children}
      </AllMembersSearchInfoStateContext.Provider>
    </AllMembersSearchInfoDispatchContext.Provider>
  );
}
