import { useContext } from "react";
import {
  PendingMembersSearchInfoDispatchContext,
  PendingMembersSearchInfoStateContext,
} from "@/contexts/PendingMembersSearchInfoContext";

export const usePendingMembersSearchInfoState = () => {
  const context = useContext(PendingMembersSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "usePendingMembersSearchInfoState must be used within a PendingMembersSearchInfoContextProvider",
    );
  }

  return context;
};

export const usePendingMembersSearchInfoDispatch = () => {
  const context = useContext(PendingMembersSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "usePendingMembersSearchInfoDispatch must be used within a PendingMembersSearchInfoContextProvider",
    );
  }

  return context;
};
