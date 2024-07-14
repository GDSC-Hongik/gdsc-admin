import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CouponSearchInfoContextProviderPropsType = {
  children: ReactNode;
};

type SearchStateType = {
  modalOpen: boolean;
};

type SearchDispatchType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultState: SearchStateType = {
  modalOpen: false,
};

export const CouponSearchInfoStateContext = createContext<SearchStateType>(defaultState);

export const CouponSearchInfoDispatchContext = createContext<SearchDispatchType>({
  setModalOpen: () => {},
});

export default function CouponSearchInfoContextProvider({
  children,
}: CouponSearchInfoContextProviderPropsType) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CouponSearchInfoDispatchContext.Provider value={{ setModalOpen }}>
      <CouponSearchInfoStateContext.Provider value={{ modalOpen }}>
        {children}
      </CouponSearchInfoStateContext.Provider>
    </CouponSearchInfoDispatchContext.Provider>
  );
}
