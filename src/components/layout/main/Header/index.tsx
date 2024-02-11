import HeaderLeftCol from "./HeaderLeftCol";
import HeaderRightCol from "./HeaderRightCol";
import { Stack, styled } from "@mui/material";

const mockCreatedDate = new Date();

export default function Header() {
  return (
    <Container>
      <HeaderLeftCol />
      <HeaderRightCol createdDate={mockCreatedDate} />
    </Container>
  );
}

const Container = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
});
