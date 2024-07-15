import { useContext } from "react";
import { AllMembersDispatchContext, AllMembersStateContext } from "@/contexts/AllMembersContext";

export const useAllMembersState = () => {
  const context = useContext(AllMembersStateContext);

  if (context === undefined) {
    throw new Error("useAllMembersState must be used within a AllMembersContextProvider");
  }

  return context;
};

export const useAllMembersDispatch = () => {
  const context = useContext(AllMembersDispatchContext);

  if (context === undefined) {
    throw new Error("useAllMembersDispatch must be used within a AllMembersContextProvider");
  }

  return context;
};
