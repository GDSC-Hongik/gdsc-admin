import { AllMemberInfoType } from "@types/entities/member";
import { allMemberTableWidthRatio } from "@constants/table";
import useDeleteMemberMutation from "@hooks/mutations/useDeleteMemberMutation";
import { formatTableValue } from "@utils/formatTableValue";
import EditInfoModal from "../InfoModal/EditInfoModal";
import { Grid, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

type MemberInfoTableBodyProps = {
  dataList: AllMemberInfoType[];
};

export default function AllMemberInfoTableBody({ dataList }: MemberInfoTableBodyProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedMemberInfo, setSelectedMemberInfo] = useState<AllMemberInfoType>();

  const deleteMemberMutation = useDeleteMemberMutation();

  const getCellWidthRatio = (option: string) => {
    return option === "studentId" || option === "name" || option === "phone"
      ? allMemberTableWidthRatio["cell"][option]
      : allMemberTableWidthRatio["cell"]["default"];
  };

  const handleModalVisible = (isModalVisible: boolean) => setIsEditModalVisible(isModalVisible);

  const handleClickEditMemberInfoButton = (index: number) => {
    handleModalVisible(true);
    setSelectedMemberInfo(dataList[index]);
  };

  const handleClickDeleteMemberButton = (memberId: number) => {
    deleteMemberMutation.mutate(memberId);
  };

  return (
    <Container container direction={"column"}>
      {dataList.map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "memberId" && (
                <TextContainer item key={index} xs={getCellWidthRatio(key)}>
                  <Text>{formatTableValue(value)}</Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button variant="outlined" onClick={() => handleClickEditMemberInfoButton(rowIndex)}>
              수정
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleClickDeleteMemberButton(row.memberId)}
            >
              탈퇴
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
      {selectedMemberInfo && (
        <EditInfoModal
          isModalVisible={isEditModalVisible}
          handleCloseModal={() => handleModalVisible(false)}
          selectedMemberInfo={selectedMemberInfo}
        />
      )}
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
