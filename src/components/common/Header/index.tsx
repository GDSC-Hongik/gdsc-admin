import { Stack, styled } from "@mui/material";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { ManagementVariant } from "@/types/entities/member";

export type HeaderProps = {
  variant: ManagementVariant;
};

export default function Header({ variant }: HeaderProps) {
  return (
    <Container>
      <HeaderLeftCol variant={variant} />
      <HeaderRightCol variant={variant} />
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
