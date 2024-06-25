import { css } from "@emotion/react";

export const typo = {
  title1: css`
    font-size: 24px;
    font-weight: 400;
    line-height: 21px;
  `,
  title2: css`
    font-size: 24px;
    font-weight: 500;
    line-height: 21px;
  `,
  title3: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  `,
  h1: css`
    font-family: Roboto;
    font-size: 36px;
    font-weight: 400;
    line-height: 48px;
  `,
  h5: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  `,
  h6: css`
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.8px;
  `,
  button1: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 108px;
    letter-spacing: 0.46px;
  `,
  body1: css`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  body2: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
  `,
  body3: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
} as const;
