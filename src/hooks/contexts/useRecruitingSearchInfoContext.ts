import { useContext } from "react";
import {
  RecruitingSearchInfoStateContext,
  RecruitingSearchInfoDispatchContext,
} from "@/contexts/RecruitingSearchInfoContext";

export const useRecruitingSearchInfoState = () => {
  const context = useContext(RecruitingSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingSearchInfoState must be used within a RecruitingSearchInfoContextProvider",
    );
  }

  return context;
};

export const useRecruitingSearchInfoDispatch = () => {
  const context = useContext(RecruitingSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingSearchInfoDispatch must be used within a RecruitingSearchInfoContextProvider",
    );
  }

  return context;
};
