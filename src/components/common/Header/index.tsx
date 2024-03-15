import { Stack, styled } from "@mui/material";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import {
  GrantableMemberInfoType,
  ManagementVariant,
  PendingMemberInfoType,
} from "@/types/entities/member";

export type HeaderProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  selectedMemberCount?: T extends "pendingMember" | "paymentStatus" | "grantableMember"
    ? number
    : undefined;
  selectedMemberList?: T extends "pendingMember"
    ? PendingMemberInfoType[]
    : T extends "grantableMember"
      ? GrantableMemberInfoType[]
      : undefined;
};

export default function Header<T extends ManagementVariant>({
  variant,
  selectedMemberCount,
  selectedMemberList,
}: HeaderProps<T>) {
  return (
    <Container>
      <HeaderLeftCol variant={variant} />
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
