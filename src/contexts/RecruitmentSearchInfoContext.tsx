import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SearchStateType = {
  demoteModalOpen: boolean;
  createSemesterInfoModalOpen: boolean;
};

type SearchDispatchType = {
  setDemoteModalOpen: Dispatch<SetStateAction<boolean>>;
  setCreateSemesterInfoModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitmentSearchInfoStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: SearchStateType = {
  demoteModalOpen: false,
  createSemesterInfoModalOpen: false,
};

export const RecruitmentSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const RecruitmentSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setDemoteModalOpen: () => {},
  setCreateSemesterInfoModalOpen: () => {},
});

export default function RecruitmentSearchInfoContextProvider({
  children,
}: RecruitmentSearchInfoStateContextProviderPropsType) {
  const [demoteModalOpen, setDemoteModalOpen] = useState(false);
  const [createSemesterInfoModalOpen, setCreateSemesterInfoModalOpen] = useState(false);

  return (
    <RecruitmentSearchInfoDispatchContext.Provider
      value={{ setDemoteModalOpen, setCreateSemesterInfoModalOpen }}
    >
      <RecruitmentSearchInfoStateContext.Provider
        value={{ demoteModalOpen, createSemesterInfoModalOpen }}
      >
        {children}
      </RecruitmentSearchInfoStateContext.Provider>
    </RecruitmentSearchInfoDispatchContext.Provider>
  );
}
