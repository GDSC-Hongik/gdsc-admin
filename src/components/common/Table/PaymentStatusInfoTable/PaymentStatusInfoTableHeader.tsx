import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import { paymentStatusTableTitle, paymentStatusTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/theme";
import { TableRatioType } from "@/types/entities/table";

export default function PaymentStatusInfoTableHeader() {
  const getTitleWidthRatio = (option: string, variant: TableRatioType) => {
    return (
      paymentStatusTableWidthRatio[variant][option] ??
      paymentStatusTableWidthRatio[variant]["default"]
    );
  };

  return (
    <Container container xs={12}>
      {paymentStatusTableTitle.map(title => (
        <Title
          item
          xs={getTitleWidthRatio(title.name, "title")}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text>{title.name}</Text>
        </Title>
      ))}
      <EmptyTitle />
    </Container>
  );
}

const Container = styled(Grid)({
  borderBottom: `1px solid ${theme.palette.gray1}`,
});

const Title = styled(Grid)({
  padding: 16,
  textAlign: "center",
});

const Text = styled(Box)({
  ...theme.typo.body2,
  maxHeight: "52px",
  color: theme.palette.gray2,
});

const EmptyTitle = styled.div({
  flex: 1,
});
