import { MemberInfoType } from "@types/main";
import { allMemberTableWidthRatio } from "@constants/table";
import InfoModal from "../InfoModal";
import { Grid, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

type MemberInfoTableBodyProps = {
  dataList: MemberInfoType[];
};

export default function AllMemberInfoTableBody({ dataList }: MemberInfoTableBodyProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const getCellWidthRatio = (option: string) => {
    return option === "studentId" || option === "name" || option === "phone"
      ? allMemberTableWidthRatio["cell"][option]
      : allMemberTableWidthRatio["cell"]["default"];
  };

  const handleModalVisible = (isModalVisible: boolean) => setIsEditModalVisible(isModalVisible);

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
            <Button variant="outlined" onClick={() => handleModalVisible(true)}>
              수정
            </Button>
            <Button variant="outlined" color="error">
              탈퇴
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
      <InfoModal
        isModalVisible={isEditModalVisible}
        handleCloseModal={() => handleModalVisible(false)}
      />
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
