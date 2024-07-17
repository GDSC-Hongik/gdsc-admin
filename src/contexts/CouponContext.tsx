import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CouponContextProviderPropsType = {
  children: ReactNode;
};

type CouponStateContextType = {
  modalOpen: boolean;
};

type CouponStateDispatchType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultState: CouponStateContextType = {
  modalOpen: false,
};

export const CouponStateContext = createContext<CouponStateContextType>(defaultState);

export const CouponDispatchContext = createContext<CouponStateDispatchType>({
  setModalOpen: () => {},
});

export default function CouponContextProvider({ children }: CouponContextProviderPropsType) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CouponDispatchContext.Provider value={{ setModalOpen }}>
      <CouponStateContext.Provider value={{ modalOpen }}>{children}</CouponStateContext.Provider>
    </CouponDispatchContext.Provider>
  );
}
