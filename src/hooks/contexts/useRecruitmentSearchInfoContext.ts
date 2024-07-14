import { useContext } from "react";
import {
  RecruitmentSearchInfoStateContext,
  RecruitmentSearchInfoDispatchContext,
} from "@/contexts/RecruitmentSearchInfoContext";

export const useRecruitmentSearchInfoState = () => {
  const context = useContext(RecruitmentSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentSearchInfoState must be used within a RecruitmentSearchInfoContextProvider",
    );
  }

  return context;
};

export const useRecruitmentSearchInfoDispatch = () => {
  const context = useContext(RecruitmentSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentSearchInfoDispatch must be used within a RecruitmentSearchInfoContextProvider",
    );
  }

  return context;
};
