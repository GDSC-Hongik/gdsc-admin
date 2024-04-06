import styled from "@emotion/styled";
import { Button, Grid, Box } from "@mui/material";
import useUpdateMemberPaymentStatusMutation from "@/hooks/mutations/useUpdateMemberPaymentStatusMutation";
import { theme } from "@/styles/theme";
import { PaymentStatusInfoType, StatusType } from "@/types/entities/member";
import { go } from "@/utils/fx/go";
import { map } from "@/utils/fx/map";
import { getTableRatio } from "@/utils/getTableRatio";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type PaymentStatusInfoBodyProps = {
  dataList: PaymentStatusInfoType[];
};

export default function PaymentStatusInfoTableBody({ dataList }: PaymentStatusInfoBodyProps) {
  const updateMemberPaymentStatusMutation = useUpdateMemberPaymentStatusMutation();

  const handleChangePaymentStatus = (memberId: number, paymentStatus: StatusType) => {
    updateMemberPaymentStatusMutation.mutate({ memberId, paymentStatus });
  };

  const filterTableInfo = (dataList: PaymentStatusInfoType[]) => {
    const newDataList: (Omit<PaymentStatusInfoType, "department" | "requirement" | "email"> & {
      paymentStatus: StatusType;
    })[] = go(
      dataList,
      map(
        ({
          memberId,
          studentId,
          name,
          phone,
          discorUsername,
          nickname,
          requirement: { paymentStatus },
        }) => ({
          memberId,
          studentId,
          name,
          phone,
          discorUsername,
          nickname,
          paymentStatus,
        }),
      ),
    );

    return newDataList;
  };

  return (
    <Container container direction={"column"}>
      {filterTableInfo(dataList).map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "memberId" &&
              key !== "paymentStatus" && (
                <TextContainer item key={index} xs={getTableRatio(key, "cell", "paymentStatus")}>
                  <Text sx={{ wordBreak: "keep-all" }}>{formatNullableValue(value)}</Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button
              variant="outlined"
              disabled={row.paymentStatus === "PENDING"}
              onClick={() => handleChangePaymentStatus(row.memberId, "PENDING")}
            >
              납입
            </Button>
            <Button
              variant="outlined"
              color="error"
              disabled={row.paymentStatus === "VERIFIED"}
              onClick={() => handleChangePaymentStatus(row.memberId, "VERIFIED")}
            >
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
  borderBottom: `1px solid ${theme.palette.gray1}`,
});

const TextContainer = styled(Grid)({
  textAlign: "center",
});

const Text = styled(Box)({
  maxHeight: "52px",
  ...theme.typo.body2,
  color: `${theme.palette.gray2}`,
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "15px",
  flex: 1,
  gap: 5,
});
