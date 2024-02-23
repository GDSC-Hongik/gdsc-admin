import styled from "@emotion/styled";
import { Stack, Box } from "@mui/material";
import { titleVariant } from "@/constants/common";
import { theme } from "@/styles/typo";
import { ManagementVariant } from "@/types/entities/member";

type TitleProps = {
  variant: ManagementVariant;
  descriptionText: string;
};

export default function Title({ variant, descriptionText }: TitleProps) {
  return (
    <Container>
      <HeaderTitle>{titleVariant[variant]}</HeaderTitle>
      <HeaderSubTitle>{descriptionText}</HeaderSubTitle>
    </Container>
  );
}

const Container = styled(Stack)({
  padding: "16px 0",
  marginBottom: "22px",
});

const HeaderTitle = styled(Box)({
  fontWeight: "500",
  fontSize: "24px",
  color: theme.palette.gray4,
  typography: "h6",
});

const HeaderSubTitle = styled(Box)({
  fontWeight: "regular",
  fontSize: "14px",
  color: theme.palette.gray3,
  typography: "subtitle1",
});
