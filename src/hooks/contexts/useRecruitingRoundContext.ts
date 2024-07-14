import { useContext } from "react";
import {
  RecruitingRoundStateContext,
  RecruitingRoundDispatchContext,
} from "@/contexts/RecruitingRoundContext";

export const useRecruitingRoundState = () => {
  const context = useContext(RecruitingRoundStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingRoundState must be used within a RecruitingRoundContextProvider",
    );
  }

  return context;
};

export const useRecruitingRoundDispatch = () => {
  const context = useContext(RecruitingRoundDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingRoundDispatch must be used within a RecruitingRoundContextProvider",
    );
  }

  return context;
};
