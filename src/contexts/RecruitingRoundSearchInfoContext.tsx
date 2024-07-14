import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  createRoundInfoModalOpen: boolean;
};

type SearchDispatchType = {
  setCreateRoundInfoModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitmentRoundSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  createRoundInfoModalOpen: false,
};

export const RecruitmentRoundSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitmentRoundSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setCreateRoundInfoModalOpen: () => {},
});

export default function RecruitmentRoundSearchInfoContextProvider({
  children,
}: RecruitmentRoundSearchInfoStateContextProviderPropsType) {
  const [createRoundInfoModalOpen, setCreateRoundInfoModalOpen] = useState(false);

  return (
    <RecruitmentRoundSearchInfoDispatchContext.Provider value={{ setCreateRoundInfoModalOpen }}>
      <RecruitmentRoundSearchInfoStateContext.Provider value={{ createRoundInfoModalOpen }}>
        {children}
      </RecruitmentRoundSearchInfoStateContext.Provider>
    </RecruitmentRoundSearchInfoDispatchContext.Provider>
  );
}
