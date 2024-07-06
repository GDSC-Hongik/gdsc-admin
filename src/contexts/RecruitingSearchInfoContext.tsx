import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  demoteModalOpen: boolean;
  createSemesterInfoModalOpen: boolean;
};

type SearchDispatchType = {
  setDemoteModalOpen: Dispatch<SetStateAction<boolean>>;
  setCreateSemesterInfoModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitingSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  demoteModalOpen: false,
  createSemesterInfoModalOpen: false,
};

export const RecruitingSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitingSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setDemoteModalOpen: () => {},
  setCreateSemesterInfoModalOpen: () => {},
});

export default function RecruitingSearchInfoContextProvider({
  children,
}: RecruitingSearchInfoStateContextProviderPropsType) {
  const [demoteModalOpen, setDemoteModalOpen] = useState(false);
  const [createSemesterInfoModalOpen, setCreateSemesterInfoModalOpen] = useState(false);

  return (
    <RecruitingSearchInfoDispatchContext.Provider
      value={{ setDemoteModalOpen, setCreateSemesterInfoModalOpen }}
    >
      <RecruitingSearchInfoStateContext.Provider
        value={{ demoteModalOpen, createSemesterInfoModalOpen }}
      >
        {children}
      </RecruitingSearchInfoStateContext.Provider>
    </RecruitingSearchInfoDispatchContext.Provider>
  );
}
