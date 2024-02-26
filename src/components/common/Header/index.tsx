import { Dispatch, SetStateAction } from "react";
import { Stack, styled } from "@mui/material";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { ManagementVariant, PendingMemberInfoType } from "@/types/entities/member";

const mockCreatedDate = new Date();

export type HeaderProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  selectedMemberCount?: T extends "pendingMember" | "feePaymentStatus" ? number : undefined;
  selectedMemberList?: T extends "pendingMember" ? PendingMemberInfoType[] : undefined;
  setAllMemberSearchType?: T extends "allMember" ? Dispatch<SetStateAction<string>> : undefined;
  setAllMemberSearchText?: T extends "allMember" ? Dispatch<SetStateAction<string>> : undefined;
  setPendingMemberSearchType?: T extends "pendingMember"
    ? Dispatch<SetStateAction<string>>
    : undefined;
  setPendingMemberSearchText?: T extends "pendingMember"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setPaymentStatusMemberSearchType?: T extends "paymentStatus"
    ? Dispatch<SetStateAction<string>>
  : undefined;
  setPaymentStatusMemberSearchText?: T extends "paymentStatus"
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
  setPaymentStatusMemberSearchType,
  setPaymentStatusMemberSearchText
}: HeaderProps<T>) {
  return (
    <Container>
      <HeaderLeftCol
        variant={variant}
        setAllMemberSearchType={setAllMemberSearchType}
        setAllMemberSearchText={setAllMemberSearchText}
        setPendingMemberSearchType={setPendingMemberSearchType}
        setPendingMemberSearchText={setPendingMemberSearchText}
        setPaymentStatusMemberSearchType={setPaymentStatusMemberSearchType}
        setPaymentStatusMemberSearchText={setPaymentStatusMemberSearchText}
      />
      <HeaderRightCol
        variant={variant}
        createdDate={mockCreatedDate}
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
