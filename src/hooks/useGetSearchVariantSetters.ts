import { UseBoundStore, StoreApi } from "zustand";
import { useAllMembersStore } from "@/store/allMembers";
import { usePaymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { usePendingMembersStore } from "@/store/pendingMembers";
import { MemberStoreType } from "@/types/entities/store";

export default function useGetSearchVariantSetters() {
  const useGetSearchVariantSetter = (useMembersStore: UseBoundStore<StoreApi<MemberStoreType>>) => {
    const setSearchVariant = useMembersStore(state => state.setSearchVariant);

    return setSearchVariant;
  };

  const setSearchVariantFunctions = {
    allMember: useGetSearchVariantSetter(useAllMembersStore),
    pendingMember: useGetSearchVariantSetter(usePendingMembersStore),
    paymentStatus: useGetSearchVariantSetter(usePaymentStatusMembersStore),
  };

  return setSearchVariantFunctions;
}
