import { useContext } from "react";
import {
  RecruitmentStateContext,
  RecruitmentDispatchContext,
} from "@/contexts/RecruitmentContext";

export const useRecruitmentState = () => {
  const context = useContext(RecruitmentStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentState must be used within a RecruitmentContextProvider",
    );
  }

  return context;
};

export const useRecruitmentDispatch = () => {
  const context = useContext(RecruitmentDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentDispatch must be used within a RecruitmentContextProvider",
    );
  }

  return context;
};
