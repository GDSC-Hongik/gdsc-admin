import { memo } from "react";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { titleVariant } from "@/constants/common";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";
import { ManagementVariant } from "@/types/entities/member";

type TitleProps = {
  variant: ManagementVariant;
  descriptionText: string;
};

function Title({ variant, descriptionText }: TitleProps) {
  return (
    <StyledTitleWrapper>
      <StyledHeaderTitle css={typo.h5}>{titleVariant[variant]}</StyledHeaderTitle>
      <StyledHeaderSubTitle css={typo.body2}>{descriptionText}</StyledHeaderSubTitle>
    </StyledTitleWrapper>
  );
}

export default memo(Title);

const StyledTitleWrapper = styled(Stack)({
  padding: "16px",
  marginBottom: "72px",
});

const StyledHeaderTitle = styled(Typography)({
  color: `${palette.black}`,
});

const StyledHeaderSubTitle = styled(Typography)({
  color: "rgba(0, 0, 0, 0.60)",
});
