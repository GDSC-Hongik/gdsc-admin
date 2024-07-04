import { createContext, ReactNode } from "react";

type SearchStateType = {};

type SearchDispatchType = {};

type RecruitingSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {};

export const RecruitingSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitingSearchInfoDispatchContext = createContext<SearchDispatchType>({});

export default function RecruitingSearchInfoContextProvider({
  children,
}: RecruitingSearchInfoStateContextProviderPropsType) {
  return (
    <RecruitingSearchInfoDispatchContext.Provider value={{}}>
      <RecruitingSearchInfoStateContext.Provider value={{}}>
        {children}
      </RecruitingSearchInfoStateContext.Provider>
    </RecruitingSearchInfoDispatchContext.Provider>
  );
}
