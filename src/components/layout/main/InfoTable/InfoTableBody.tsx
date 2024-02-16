import { InfoTableRowType } from "@types/main";
import { tableWidthRatio } from "@constants/table";
import InfoModal from "../InfoModal";
import { Grid, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

type InfoTableBodyProps = {
  dataList: InfoTableRowType[];
};

export default function InfoTableBody({ dataList }: InfoTableBodyProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const getCellWidthRatio = (option: string) => {
    return option === "studentId" || option === "name" || option === "phone"
      ? tableWidthRatio["cell"][option]
      : tableWidthRatio["cell"]["default"];
  };

  const handleCloseModal = () => setIsEditModalVisible(false);

  return (
    <Container container direction={"column"}>
      {dataList.map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "memberId" && (
                <TextContainer item key={index} xs={getCellWidthRatio(key)}>
                  <Text>{value}</Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button variant="outlined" onClick={() => setIsEditModalVisible(true)}>
              수정
            </Button>
            <Button variant="outlined" color="error">
              탈퇴
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
      <InfoModal isModalVisible={isEditModalVisible} handleCloseModal={handleCloseModal} />
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
