import { UseBoundStore, StoreApi } from "zustand";
import { useAllMembersStore } from "@/store/allMembers";
import { usePaymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { usePendingMembersStore } from "@/store/pendingMembers";
import { MemberStoreType } from "@/types/entities/store";

export default function useGetSearchTextSetters() {
  const useGetSearchTextSetter = (useMembersStore: UseBoundStore<StoreApi<MemberStoreType>>) => {
    const setSearchText = useMembersStore(state => state.setSearchText);

    return setSearchText;
  };

  const setSearchTextFunctions = {
    allMember: useGetSearchTextSetter(useAllMembersStore),
    pendingMember: useGetSearchTextSetter(usePendingMembersStore),
    paymentStatus: useGetSearchTextSetter(usePaymentStatusMembersStore),
  };

  return setSearchTextFunctions;
}
