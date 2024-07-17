import { useContext } from "react";
import { CouponStateContext, CouponDispatchContext } from "@/contexts/CouponContext";

export const useCouponStateContext = () => {
  const context = useContext(CouponStateContext);

  if (context === undefined) {
    throw new Error("useCouponStateContext must be used within a CouponContextProvider");
  }

  return context;
};

export const useCouponDispatchContext = () => {
  const context = useContext(CouponDispatchContext);

  if (context === undefined) {
    throw new Error("useCouponDispatchContext must be used within a CouponContextProvider");
  }

  return context;
};
