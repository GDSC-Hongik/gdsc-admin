import { useContext } from "react";
import {
  RecruitmentRoundStateContext,
  RecruitmentRoundDispatchContext,
} from "@/contexts/RecruitmentRoundContext";

export const useRecruitmentRoundStateContext = () => {
  const context = useContext(RecruitmentRoundStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundStateContext must be used within a RecruitmentRoundContextProvider",
    );
  }

  return context;
};

export const useRecruitmentRoundDispatchContext = () => {
  const context = useContext(RecruitmentRoundDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentRoundDispatchContext must be used within a RecruitmentRoundContextProvider",
    );
  }

  return context;
};
