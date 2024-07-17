import { useContext } from "react";
import {
  PendingMembersDispatchContext,
  PendingMembersStateContext,
} from "@/contexts/PendingMembersContext";

export const usePendingMembersStateContext = () => {
  const context = useContext(PendingMembersStateContext);

  if (context === undefined) {
    throw new Error(
      "usePendingMembersStateContext must be used within a PendingMembersContextProvider",
    );
  }

  return context;
};

export const usePendingMembersDispatchContext = () => {
  const context = useContext(PendingMembersDispatchContext);

  if (context === undefined) {
    throw new Error(
      "usePendingMembersDispatchContext must be used within a PendingMembersContextProvider",
    );
  }

  return context;
};
