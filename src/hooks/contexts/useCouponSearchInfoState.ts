import { useContext } from "react";
import {
  CouponSearchInfoStateContext,
  CouponSearchInfoDispatchContext,
} from "@/contexts/CouponSearchInfoContext";

export const useCouponSearchInfoState = () => {
  const context = useContext(CouponSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "useCouponSearchInfoState must be used within a CouponSearchInfoContextProvider",
    );
  }

  return context;
};

export const useCouponSearchInfoDispatch = () => {
  const context = useContext(CouponSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useCouponSearchInfoDispatch must be used within a CouponSearchInfoContextProvider",
    );
  }

  return context;
};
