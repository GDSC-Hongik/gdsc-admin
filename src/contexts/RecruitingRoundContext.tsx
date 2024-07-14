import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type RecruitingRoundStateContextType = {
  createRoundModalOpen: boolean;
};

type RecruitingRoundDispatchContextType = {
  setCreateRoundModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitingRoundStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: RecruitingRoundStateContextType = {
  createRoundModalOpen: false,
};

export const RecruitingRoundStateContext =
  createContext<RecruitingRoundStateContextType>(defaultState);

export const RecruitingRoundDispatchContext = createContext<RecruitingRoundDispatchContextType>({
  setCreateRoundModalOpen: () => {},
});

export default function RecruitingRoundContextProvider({
  children,
}: RecruitingRoundStateContextProviderPropsType) {
  const [createRoundModalOpen, setCreateRoundModalOpen] = useState(false);

  return (
    <RecruitingRoundDispatchContext.Provider value={{ setCreateRoundModalOpen }}>
      <RecruitingRoundStateContext.Provider value={{ createRoundModalOpen }}>
        {children}
      </RecruitingRoundStateContext.Provider>
    </RecruitingRoundDispatchContext.Provider>
  );
}
