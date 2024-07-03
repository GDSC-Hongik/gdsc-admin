import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  semester: "1" | "2" | undefined;
};

type SearchDispatchType = {
  setSemester: Dispatch<SetStateAction<SearchStateType["semester"]>>;
};

type RecruitingSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  semester: undefined,
};

export const RecruitingSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitingSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setSemester: () => {},
});

export default function RecruitingSearchInfoContextProvider({
  children,
}: RecruitingSearchInfoStateContextProviderPropsType) {
  const [semester, setSemester] = useState<SearchStateType["semester"]>(undefined);

  return (
    <RecruitingSearchInfoDispatchContext.Provider value={{ setSemester }}>
      <RecruitingSearchInfoStateContext.Provider value={{ semester }}>
        {children}
      </RecruitingSearchInfoStateContext.Provider>
    </RecruitingSearchInfoDispatchContext.Provider>
  );
}
