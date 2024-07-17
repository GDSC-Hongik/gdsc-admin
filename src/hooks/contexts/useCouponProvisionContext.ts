import { useContext } from "react";
import {
  CouponProvisionDispatchContext,
  CouponProvisionStateContext,
} from "@/contexts/CouponProvisionContext";

export const useCouponProvisionStateContext = () => {
  const context = useContext(CouponProvisionStateContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionState must be used within a CouponProvisionContextProvider",
    );
  }

  return context;
};

export const useCouponProvisionDispatchContext = () => {
  const context = useContext(CouponProvisionDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useCouponProvisionDispatch must be used within a CouponProvisionContextProvider",
    );
  }

  return context;
};
