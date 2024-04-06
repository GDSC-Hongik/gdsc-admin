import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import { paymentStatusTableTitle } from "@/constants/table";
import { theme } from "@/styles/theme";
import { getTableRatio } from "@/utils/getTableRatio";

export default function PaymentStatusInfoTableHeader() {
  return (
    <Container container xs={12}>
      {paymentStatusTableTitle.map(title => (
        <Title
          item
          xs={getTableRatio(title.name, "title", "paymentStatus")}
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
