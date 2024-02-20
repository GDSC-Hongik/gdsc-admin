import { PaymentStatusInfoType } from "@types/entities/member";
import styled from "@emotion/styled";
import { Button, Grid, Box } from "@mui/material";

type PaymentStatusInfoBodyProps = {
  dataList: PaymentStatusInfoType[];
};

export default function PaymentStatusInfoTableBody({ dataList }: PaymentStatusInfoBodyProps) {
  return (
    <Container container direction={"column"}>
      {dataList.map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "memberId" && (
                <TextContainer item key={index}>
                  <Text>{value}</Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button variant="outlined" onClick={() => {}}>
              납입
            </Button>
            <Button variant="outlined" color="error">
              미납
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
    </Container>
  );
}

const Container = styled(Grid)({});

const CellContainer = styled(Grid)({
  borderBottom: "1px solid #0000001F",
});

const TextContainer = styled(Grid)({
  textAlign: "center",
});

const Text = styled(Box)({
  maxHeight: "52px",
  fontWeight: 500,
  lineHeight: "24px",
  fontSize: "14px",
  color: "000000DD",
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  gap: 5,
});
