import { useContext } from "react";
import {
  IssuedCouponSearchInfoDispatchContext,
  IssuedCouponSearchInfoStateContext,
} from "@/contexts/IssuedCouponSearchInfoContext";

export const useIssuedCouponSearchInfoState = () => {
  const context = useContext(IssuedCouponSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponSearchInfoState must be used within a IssuedCouponSearchInfoContextProvider",
    );
  }

  return context;
};

export const useIssuedCouponSearchInfoDispatch = () => {
  const context = useContext(IssuedCouponSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponSearchInfoDispatch must be used within a IssuedCouponSearchInfoContextProvider",
    );
  }

  return context;
};
