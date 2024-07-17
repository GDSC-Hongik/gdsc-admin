import { useContext } from "react";
import {
  IssuedCouponDispatchContext,
  IssuedCouponStateContext,
} from "@/contexts/IssuedCouponContext";

export const useIssuedCouponStateContext = () => {
  const context = useContext(IssuedCouponStateContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponStateContext must be used within a IssuedCouponContextProvider",
    );
  }

  return context;
};

export const useIssuedCouponDispatchContext = () => {
  const context = useContext(IssuedCouponDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useIssuedCouponDispatchContext must be used within a IssuedCouponContextProvider",
    );
  }

  return context;
};
