import { PaymentStatusInfoType, StatusType } from "@types/entities/member";
import { paymentStatusFieldMapping, pendingMemberTableWidthRatio } from "@constants/table";
import styled from "@emotion/styled";
import { Button, Grid, Box } from "@mui/material";

type PaymentStatusInfoBodyProps = {
  dataList: PaymentStatusInfoType[];
};

export default function PaymentStatusInfoTableBody({ dataList }: PaymentStatusInfoBodyProps) {
  const getCellWidthRatio = (option: string) => {
    return option === "studentId" || option === "name" || option === "phone"
      ? pendingMemberTableWidthRatio["cell"][option]
      : pendingMemberTableWidthRatio["cell"]["default"];
  };

  return (
    <Container container direction={"column"}>
      {dataList.map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "memberId" && (
                <TextContainer item key={index} xs={getCellWidthRatio(key)}>
                  <Text>
                    {key === "paymentStatus"
                      ? paymentStatusFieldMapping[value as StatusType]
                      : value}
                  </Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button variant="outlined" disabled={row.paymentStatus === "VERIFIED"}>
              납입
            </Button>
            <Button variant="outlined" color="error" disabled={row.paymentStatus === "PENDING"}>
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
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "15px",
  flex: 1,
  gap: 5,
});