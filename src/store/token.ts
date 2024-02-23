import { create } from "zustand";
import lStorage, { StorageKeys } from "@/utils/storage/index";

type TokenStore = {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
};

const useTokenStore = create<TokenStore>(set => ({
  token: "",
  setToken: token => {
    lStorage.set(StorageKeys.Token, token);
    set({ token });
  },
  clearToken: () => {
    lStorage.remove(StorageKeys.Token);
    set({ token: "" });
  },
}));

export default useTokenStore;
