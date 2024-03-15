import { createContext, ReactNode, SetStateAction, useState, Dispatch } from "react";
import { AllMemberInfoType, PendingMemberInfoType } from "@/types/entities/member";

export const SelectedMemberListContext = createContext<
  PendingMemberInfoType[] | AllMemberInfoType[]
>([]);
export const SelectedMemberDispatchContext = createContext<
  Dispatch<SetStateAction<PendingMemberInfoType[] | AllMemberInfoType[]>>
>(() => {});

type SelectedMemberContextProviderProps = {
  children: ReactNode;
};

export default function SelectedMemberContextProvider({
  children,
}: SelectedMemberContextProviderProps) {
  const [selectedMemberList, setSelectedMemberList] = useState<
    PendingMemberInfoType[] | AllMemberInfoType[]
  >([]);

  return (
    <SelectedMemberDispatchContext.Provider value={setSelectedMemberList}>
      <SelectedMemberListContext.Provider value={selectedMemberList}>
        {children}
      </SelectedMemberListContext.Provider>
    </SelectedMemberDispatchContext.Provider>
  );
}
