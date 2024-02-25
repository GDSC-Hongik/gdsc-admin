import styled from "@emotion/styled";
import { Stack, Box } from "@mui/material";
import { titleVariant } from "@/constants/common";
import { theme } from "@/styles/theme";
import { ManagementVariant } from "@/types/entities/member";

type TitleProps = {
  variant: ManagementVariant;
  descriptionText: string;
};

export default function Title({ variant, descriptionText }: TitleProps) {
  return (
    <Container>
      <HeaderTitle sx={{ marginBottom: "5px" }}>{titleVariant[variant]}</HeaderTitle>
      <HeaderSubTitle>{descriptionText}</HeaderSubTitle>
    </Container>
  );
}

const Container = styled(Stack)({
  padding: "16px 0",
  marginBottom: "22px",
});

const HeaderTitle = styled(Box)({
  ...theme.typo.title2,
  color: theme.palette.gray4,
  typography: "h6",
});

const HeaderSubTitle = styled(Box)({
  color: theme.palette.gray3,
  fontWeight: "regular",
  fontSize: "14px",
  typography: "subtitle1",
});
