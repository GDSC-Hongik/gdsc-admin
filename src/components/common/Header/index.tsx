import { ManagementVariant } from "@types/entities/member";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { Stack, styled } from "@mui/material";

const mockCreatedDate = new Date();

export type HeaderProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
  selectedMemberCount?: T extends "pendingMember" | "feePaymentStatus" ? number : undefined;
};

export default function Header<T extends ManagementVariant>({
  variant,
  selectedMemberCount,
}: HeaderProps<T>) {
  return (
    <Container>
      <HeaderLeftCol variant={variant} />
      <HeaderRightCol
        variant={variant}
        createdDate={mockCreatedDate}
        selectedMemberCount={selectedMemberCount}
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
