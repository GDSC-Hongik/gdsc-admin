import { useContext } from "react";
import {
  PaymentStatusSearchInfoDispatchContext,
  PaymentStatusSearchInfoStateContext,
} from "@/contexts/PaymentStatusSearchInfoContext";

export const usePaymentStatusSearchInfoState = () => {
  const context = useContext(PaymentStatusSearchInfoStateContext);

  if (context === undefined) {
    throw new Error(
      "usePaymentStatusSearchInfoState must be used within a PaymentStatusSearchInfoContextProvider",
    );
  }

  return context;
};

export const usePaymentStatusSearchInfoDispatch = () => {
  const context = useContext(PaymentStatusSearchInfoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "usePaymentStatusSearchInfoDispatch must be used within a PaymentStatusSearchInfoContextProvider",
    );
  }

  return context;
};
