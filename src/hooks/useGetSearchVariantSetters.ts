import { UseBoundStore, StoreApi, useStore } from "zustand";
import { allMembersStore } from "@/store/allMembers";
import { grantableMembersStore } from "@/store/grantableMembers";
import { grantedMembersStore } from "@/store/grantedMembers";
import { paymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { pendingMembersStore } from "@/store/pendingMembers";
import { MemberStoreType } from "@/types/entities/store";

export default function useGetSearchVariantSetters() {
  const useGetSearchVariantSetter = (store: UseBoundStore<StoreApi<MemberStoreType>>) => {
    const { setSearchVariant } = useStore(store);

    return setSearchVariant;
  };

  const setSearchVariantFunctions = {
    allMember: useGetSearchVariantSetter(allMembersStore),
    grantedMember: useGetSearchVariantSetter(grantedMembersStore),
    grantableMember: useGetSearchVariantSetter(grantableMembersStore),
    pendingMember: useGetSearchVariantSetter(pendingMembersStore),
    paymentStatus: useGetSearchVariantSetter(paymentStatusMembersStore),
  };

  return setSearchVariantFunctions;
}
