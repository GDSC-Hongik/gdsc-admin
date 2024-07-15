import { useContext } from "react";
import {
  PaymentStatusDispatchContext,
  PaymentStatusStateContext,
} from "@/contexts/PaymentStatusContext";

export const usePaymentStatusStateContext = () => {
  const context = useContext(PaymentStatusStateContext);

  if (context === undefined) {
    throw new Error(
      "usePaymentStatusState must be used within a PaymentStatusContextProvider",
    );
  }

  return context;
};

export const usePaymentStatusDispatchContext = () => {
  const context = useContext(PaymentStatusDispatchContext);

  if (context === undefined) {
    throw new Error(
      "usePaymentStatusDispatch must be used within a PaymentStatusContextProvider",
    );
  }

  return context;
};
