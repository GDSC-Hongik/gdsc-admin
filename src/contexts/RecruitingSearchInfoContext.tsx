import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  demoteModalOpen: boolean;
};

type SearchDispatchType = {
  setDemoteModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitingSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  demoteModalOpen: false,
};

export const RecruitingSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitingSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setDemoteModalOpen: () => {},
});

export default function RecruitingSearchInfoContextProvider({
  children,
}: RecruitingSearchInfoStateContextProviderPropsType) {
  const [demoteModalOpen, setDemoteModalOpen] = useState(false);

  return (
    <RecruitingSearchInfoDispatchContext.Provider value={{ setDemoteModalOpen }}>
      <RecruitingSearchInfoStateContext.Provider value={{ demoteModalOpen }}>
        {children}
      </RecruitingSearchInfoStateContext.Provider>
    </RecruitingSearchInfoDispatchContext.Provider>
  );
}
