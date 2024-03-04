import { Dispatch, SetStateAction } from "react";
import { Stack, styled } from "@mui/material";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { GrantableMemberInfoType, ManagementVariant, PendingMemberInfoType } from "@/types/entities/member";

export type HeaderProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  selectedMemberCount?: T extends "pendingMember" | "feePaymentStatus" | "grantableMember" ? number : undefined;
  selectedMemberList?: T extends "pendingMember" ? PendingMemberInfoType[] : T extends "grantableMember" ? GrantableMemberInfoType[] : undefined;
  setAllMemberSearchType?: T extends "allMember" ? Dispatch<SetStateAction<string>> : undefined;
  setAllMemberSearchText?: T extends "allMember" ? Dispatch<SetStateAction<string>> : undefined;
  setPendingMemberSearchType?: T extends "pendingMember"
    ? Dispatch<SetStateAction<string>>
    : undefined;
  setPendingMemberSearchText?: T extends "pendingMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setGrantableMemberSearchType?: T extends "grantableMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setGrantableMemberSearchText?: T extends "grantableMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setPaymentStatusMemberSearchType?: T extends "paymentStatus"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setPaymentStatusMemberSearchText?: T extends "paymentStatus"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setGrantedMemberSearchType?: T extends "grantedMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setGrantedMemberSearchText?: T extends "grantedMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
};

export default function Header<T extends ManagementVariant>({
  variant,
  selectedMemberCount,
  selectedMemberList,
  setAllMemberSearchType,
  setAllMemberSearchText,
  setPendingMemberSearchType,
  setPendingMemberSearchText,
  setGrantableMemberSearchType,
  setGrantableMemberSearchText,
  setPaymentStatusMemberSearchType,
  setPaymentStatusMemberSearchText,
  setGrantedMemberSearchType,
  setGrantedMemberSearchText
}: HeaderProps<T>) {
  return (
    <Container>
      <HeaderLeftCol
        variant={variant}
        setAllMemberSearchType={setAllMemberSearchType}
        setAllMemberSearchText={setAllMemberSearchText}
        setPendingMemberSearchType={setPendingMemberSearchType}
        setPendingMemberSearchText={setPendingMemberSearchText}
        setGrantableMemberSearchType={setGrantableMemberSearchType}
        setGrantableMemberSearchText={setGrantableMemberSearchText}
        setPaymentStatusMemberSearchType={setPaymentStatusMemberSearchType}
        setPaymentStatusMemberSearchText={setPaymentStatusMemberSearchText}
        setGrantedMemberSearchType={setGrantedMemberSearchType}
        setGrantedMemberSearchText={setGrantedMemberSearchText}
      />
      <HeaderRightCol
        variant={variant}
        selectedMemberCount={selectedMemberCount}
        selectedMemberList={selectedMemberList}
      />
    </Container>
  );
}

const Container = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px 0",
});
