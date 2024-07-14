import { useContext } from "react";
import {
  RecruitmentRoundSearchInfoStateContext,
  RecruitmentRoundSearchInfoDispatchContext,
} from "@/contexts/RecruitmentRoundSearchInfoContext";

export const useRecruitmentRoundSearchInfoState = () => {
  const context = useContext(RecruitmentRoundSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundSearchInfoState must be used within a RecruitmentRoundSearchInfoContextProvider",
    );
  }

  return context;
};

export const useRecruitmentRoundSearchInfoDispatch = () => {
  const context = useContext(RecruitmentRoundSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundSearchInfoDispatch must be used within a RecruitmentRoundSearchInfoContextProvider",
    );
  }

  return context;
};
