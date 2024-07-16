import { useContext } from "react";
import {
  IssuedCouponDispatchContext,
  IssuedCouponStateContext,
} from "@/contexts/IssuedCouponContext";

export const useIssuedCouponState = () => {
  const context = useContext(IssuedCouponStateContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponState must be used within a IssuedCouponContextProvider",
    );
  }

  return context;
};

export const useIssuedCouponDispatch = () => {
  const context = useContext(IssuedCouponDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponDispatch must be used within a IssuedCouponContextProvider",
    );
  }

  return context;
};
