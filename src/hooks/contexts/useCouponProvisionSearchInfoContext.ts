import { useContext } from "react";
import {
  CouponProvisionSearchInfoDispatchContext,
  CouponProvisionSearchInfoStateContext,
} from "@/contexts/CouponProvisionSearchInfoContext";

export const useCouponProvisionSearchInfoState = () => {
  const context = useContext(CouponProvisionSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionSearchInfoState must be used within a CouponProvisionSearchInfoContextProvider",
    );
  }

  return context;
};

export const useCouponProvisionSearchInfoDispatch = () => {
  const context = useContext(CouponProvisionSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionSearchInfoDispatch must be used within a CouponProvisionSearchInfoContextProvider",
    );
  }

  return context;
};
