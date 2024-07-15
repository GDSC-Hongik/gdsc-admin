import { useContext } from "react";
import {
  RecruitmentRoundStateContext,
  RecruitmentRoundDispatchContext,
} from "@/contexts/RecruitmentRoundContext";

export const useRecruitmentRoundStateContext = () => {
  const context = useContext(RecruitmentRoundStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundState must be used within a RecruitmentRoundContextProvider",
    );
  }

  return context;
};

export const useRecruitmentRoundDispatchContext = () => {
  const context = useContext(RecruitmentRoundDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundDispatch must be used within a RecruitmentRoundContextProvider",
    );
  }

  return context;
};
