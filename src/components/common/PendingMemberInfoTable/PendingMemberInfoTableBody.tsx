import { PendingMemberInfoType, PendingMemberTableInfoType } from "@types/entities/member";
import { pendingMemberTableWidthRatio } from "@constants/table";
import { Box, Button, Checkbox, Grid } from "@mui/material";
import styled from "@emotion/styled";

type PendingMemberInfoTableBodyProps = {
  dataList: PendingMemberInfoType[];
};

export default function PendingMemberInfoTableBody({ dataList }: PendingMemberInfoTableBodyProps) {
  const filterTableInfo = (dataList: PendingMemberInfoType[]) => {
    const newDataList: PendingMemberTableInfoType[] = [];

    dataList.forEach(data => {
      newDataList.push({
        studentId: data.studentId,
        name: data.name,
        phone: data.phone,
        discordUsername: data.discordUsername,
        nickname: data.nickname,
        paymentStatus: data.requirement.paymentStatus === "PENDING" ? "미완료" : "완료",
      });
    });

    return newDataList;
  };

  const getTitleWidthRatio = (title: string) => {
    return title === "studentId" || title === "name" || title === "phone"
      ? pendingMemberTableWidthRatio["cell"][title]
      : pendingMemberTableWidthRatio["cell"]["default"];
  };

  return (
    <Grid container direction={"column"} style={{ border: "1px solid green" }}>
      {filterTableInfo(dataList).map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          <Checkbox />
          {Object.entries(row).map(([key, value], index) => (
            <TextContainer item key={index} xs={getTitleWidthRatio(key)}>
              <Text>{typeof value === "object" ? JSON.stringify(value) : value}</Text>
            </TextContainer>
          ))}
          <ButtonContainer>
            <Button variant="outlined">상세</Button>
          </ButtonContainer>
        </CellContainer>
      ))}
    </Grid>
  );
}

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
