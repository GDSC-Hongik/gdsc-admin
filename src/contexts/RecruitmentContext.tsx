import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type RecruitmentStateContextType = {
  demoteModalOpen: boolean;
  createSemesterInfoModalOpen: boolean;
};

type RecruitmentDispatchContextType = {
  setDemoteModalOpen: Dispatch<SetStateAction<boolean>>;
  setCreateSemesterInfoModalOpen: Dispatch<SetStateAction<boolean>>;
};

type RecruitmentStateContextProviderPropsType = {
  children: ReactNode;
};

const defaultState: RecruitmentStateContextType = {
  demoteModalOpen: false,
  createSemesterInfoModalOpen: false,
};

export const RecruitmentStateContext = createContext<RecruitmentStateContextType>(defaultState);

export const RecruitmentDispatchContext = createContext<RecruitmentDispatchContextType>({
  setDemoteModalOpen: () => {},
  setCreateSemesterInfoModalOpen: () => {},
});

export default function RecruitmentContextProvider({
  children,
}: RecruitmentStateContextProviderPropsType) {
  const [demoteModalOpen, setDemoteModalOpen] = useState(false);
  const [createSemesterInfoModalOpen, setCreateSemesterInfoModalOpen] = useState(false);

  return (
    <RecruitmentDispatchContext.Provider
      value={{ setDemoteModalOpen, setCreateSemesterInfoModalOpen }}
    >
      <RecruitmentStateContext.Provider value={{ demoteModalOpen, createSemesterInfoModalOpen }}>
        {children}
      </RecruitmentStateContext.Provider>
    </RecruitmentDispatchContext.Provider>
  );
}
