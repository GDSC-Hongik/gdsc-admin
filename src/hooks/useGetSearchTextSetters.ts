import { UseBoundStore, StoreApi, useStore } from "zustand";
import { allMembersStore } from "@/store/allMembers";
import { grantableMembersStore } from "@/store/grantableMembers";
import { grantedMembersStore } from "@/store/grantedMembers";
import { paymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { pendingMembersStore } from "@/store/pendingMembers";
import { MemberStoreType } from "@/types/entities/store";

export default function useGetSearchTextSetters() {
  const useGetSearchTextSetter = (store: UseBoundStore<StoreApi<MemberStoreType>>) => {
    const { setSearchText } = useStore(store);

    return setSearchText;
  };

  const setSearchTextFunctions = {
    allMember: useGetSearchTextSetter(allMembersStore),
    grantedMember: useGetSearchTextSetter(grantedMembersStore),
    grantableMember: useGetSearchTextSetter(grantableMembersStore),
    pendingMember: useGetSearchTextSetter(pendingMembersStore),
    paymentStatus: useGetSearchTextSetter(paymentStatusMembersStore),
  };

  return setSearchTextFunctions;
}
