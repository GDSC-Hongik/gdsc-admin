import { ManagementVariant } from "@types/main";
import { titleVariant } from "@constants/common";
import styled from "@emotion/styled";
import { Stack, Box } from "@mui/material";

type TitleProps = {
  variant: ManagementVariant;
  descriptionText: string;
};

export default function Title({ variant, descriptionText }: TitleProps) {
  return (
    <Container>
      <HeaderTitle sx={{ typography: "h6" }}>{titleVariant[variant]}</HeaderTitle>
      <HeaderSubTitle
        sx={{
          typography: "subtitle1",
        }}
      >
        {descriptionText}
      </HeaderSubTitle>
    </Container>
  );
}

const Container = styled(Stack)({
  padding: "16px 0",
  marginBottom: "22px",
});

const HeaderTitle = styled(Box)({
  fontWeight: "500",
  fontSize: "24",
  color: "#212121",
});

const HeaderSubTitle = styled(Box)({
  fontWeight: "regular",
  fontSize: 14,
  color: "#757575",
});
