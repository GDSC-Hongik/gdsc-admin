import { useContext } from "react";
import {
  RecruitmentStateContext,
  RecruitmentDispatchContext,
} from "@/contexts/RecruitmentContext";

export const useRecruitmentStateContext = () => {
  const context = useContext(RecruitmentStateContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentStateContext must be used within a RecruitmentContextProvider",
    );
  }

  return context;
};

export const useRecruitmentDispatchContext = () => {
  const context = useContext(RecruitmentDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRecruitmentDispatchContext must be used within a RecruitmentContextProvider",
    );
  }

  return context;
};
