import { useContext } from "react";
import {
  AllMembersSearchInfoStateContext,
  AllMembersSearchInfoDispatchContext,
} from "@/contexts/AllMembersSearchInfoContext";

export const useAllMembersSearchInfoState = () => {
  const context = useContext(AllMembersSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useAllMembersSearchInfoState must be used within a AllMembersSearchInfoContextProvider",
    );
  }

  return context;
};

export const useAllMembersSearchInfoDispatch = () => {
  const context = useContext(AllMembersSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useAllMembersSearchInfoDispatch must be used within a AllMembersSearchInfoContextProvider",
    );
  }

  return context;
};
