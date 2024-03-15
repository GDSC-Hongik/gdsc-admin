import { createContext, ReactNode, SetStateAction, useState, Dispatch } from "react";
import { PendingMemberInfoType } from "@/types/entities/member";

export const SelectedMemberListContext = createContext<PendingMemberInfoType[]>([]);
export const SelectedMemberDispatchContext = createContext<
  Dispatch<SetStateAction<PendingMemberInfoType[]>>
>(() => {});

type SelectedMemberContextProviderProps = {
  children: ReactNode;
};

export default function SelectedMemberContextProvider({
  children,
}: SelectedMemberContextProviderProps) {
  const [selectedMemberList, setSelectedMemberList] = useState<PendingMemberInfoType[]>([]);

  return (
    <SelectedMemberDispatchContext.Provider value={setSelectedMemberList}>
      <SelectedMemberListContext.Provider value={selectedMemberList}>
        {children}
      </SelectedMemberListContext.Provider>
    </SelectedMemberDispatchContext.Provider>
  );
}
