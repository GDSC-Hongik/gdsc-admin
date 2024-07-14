import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type RecruitmentRoundStateContextType = {
  createRoundModalOpen: boolean;
};

type RecruitmentRoundDispatchContextType = {
  setCreateRoundModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitmentRoundStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: RecruitmentRoundStateContextType = {
  createRoundModalOpen: false,
};

export const RecruitmentRoundStateContext =
  createContext<RecruitmentRoundStateContextType>(defaultState);

export const RecruitmentRoundDispatchContext = createContext<RecruitmentRoundDispatchContextType>({
  setCreateRoundModalOpen: () => {},
});

export default function RecruitmentRoundContextProvider({
  children,
}: RecruitmentRoundStateContextProviderPropsType) {
  const [createRoundModalOpen, setCreateRoundModalOpen] = useState(false);

  return (
    <RecruitmentRoundDispatchContext.Provider value={{ setCreateRoundModalOpen }}>
      <RecruitmentRoundStateContext.Provider value={{ createRoundModalOpen }}>
        {children}
      </RecruitmentRoundStateContext.Provider>
    </RecruitmentRoundDispatchContext.Provider>
  );
}
