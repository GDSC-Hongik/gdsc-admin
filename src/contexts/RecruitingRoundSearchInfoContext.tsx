import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  createRoundInfoModalOpen: boolean;
};

type SearchDispatchType = {
  setCreateRoundInfoModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitingRoundSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  createRoundInfoModalOpen: false,
};

export const RecruitingRoundSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitingRoundSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setCreateRoundInfoModalOpen: () => {},
});

export default function RecruitingRoundSearchInfoContextProvider({
  children,
}: RecruitingRoundSearchInfoStateContextProviderPropsType) {
  const [createRoundInfoModalOpen, setCreateRoundInfoModalOpen] = useState(false);

  return (
    <RecruitingRoundSearchInfoDispatchContext.Provider value={{ setCreateRoundInfoModalOpen }}>
      <RecruitingRoundSearchInfoStateContext.Provider value={{ createRoundInfoModalOpen }}>
        {children}
      </RecruitingRoundSearchInfoStateContext.Provider>
    </RecruitingRoundSearchInfoDispatchContext.Provider>
  );
}
