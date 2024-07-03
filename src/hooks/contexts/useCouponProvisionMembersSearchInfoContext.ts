import { useContext } from "react";
import {
  CouponProvisionMembersSearchInfoDispatchContext,
  CouponProvisionMembersSearchInfoStateContext,
} from "@/contexts/CouponProvisionMembersSearchInfoContext";

export const useCouponProvisionMembersSearchInfoState = () => {
  const context = useContext(CouponProvisionMembersSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionMembersSearchInfoState must be used within a CouponProvisionMembersSearchInfoContextProvider",
    );
  }

  return context;
};

export const useCouponProvisionMembersSearchInfoDispatch = () => {
  const context = useContext(CouponProvisionMembersSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionMembersSearchInfoDispatch must be used within a CouponProvisionMembersSearchInfoContextProvider",
    );
  }

  return context;
};
