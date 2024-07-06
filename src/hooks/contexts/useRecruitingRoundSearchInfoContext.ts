import { useContext } from "react";
import {
  RecruitingRoundSearchInfoStateContext,
  RecruitingRoundSearchInfoDispatchContext,
} from "@/contexts/RecruitingRoundSearchInfoContext";

export const useRecruitingRoundSearchInfoState = () => {
  const context = useContext(RecruitingRoundSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingRoundSearchInfoState must be used within a RecruitingRoundSearchInfoContextProvider",
    );
  }

  return context;
};

export const useRecruitingRoundSearchInfoDispatch = () => {
  const context = useContext(RecruitingRoundSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitingRoundSearchInfoDispatch must be used within a RecruitingRoundSearchInfoContextProvider",
    );
  }

  return context;
};
