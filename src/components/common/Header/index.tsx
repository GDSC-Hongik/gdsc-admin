import { ManagementVariant } from "@types/main";
import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { Stack, styled } from "@mui/material";

const mockCreatedDate = new Date();

type HeaderProps = {
  variant: ManagementVariant;
};

export default function Header({ variant }: HeaderProps) {
  return (
    <Container>
      <HeaderLeftCol variant={variant} />
      <HeaderRightCol variant={variant} createdDate={mockCreatedDate} />
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
