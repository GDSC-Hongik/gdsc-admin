import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Box, Button } from "@mui/material";
import EditInfoModal from "../../InfoModal/EditInfoModal";
import { allMemberTableWidthRatio } from "@/constants/table";
import useDeleteMemberMutation from "@/hooks/mutations/useDeleteMemberMutation";
import { theme } from "@/styles/theme";
import { AllMemberInfoStateType, AllMemberInfoType } from "@/types/entities/member";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type AllMemberInfoTableBodyProps = {
  dataList: AllMemberInfoType[];
};

export default function AllMemberInfoTableBody({ dataList }: AllMemberInfoTableBodyProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedMemberInfo, setSelectedMemberInfo] = useState<AllMemberInfoStateType>();
  const [departmentSearchText, setDepartmentSearchText] = useState("");

  const deleteMemberMutation = useDeleteMemberMutation();

  const getCellWidthRatio = (option: string) => {
    return option === "studentId" || option === "name" || option === "phone"
      ? allMemberTableWidthRatio["cell"][option]
      : allMemberTableWidthRatio["cell"]["default"];
  };

  const handleModalVisible = (isModalVisible: boolean) => setIsEditModalVisible(isModalVisible);

  const handleClickEditMemberInfoButton = (index: number) => {
    setSelectedMemberInfo(dataList[index]);
    handleModalVisible(true);
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
              key !== "memberId" && key !== 'requirement' && (
                <TextContainer item key={index} xs={getCellWidthRatio(key)}>
                  <Text sx={{ wordBreak: "keep-all" }}>
                    {(value as { code: string; name: string })?.name ?? formatNullableValue(value)}
                  </Text>
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
          setIsModalVisible={setIsEditModalVisible}
          handleCloseModal={() => handleModalVisible(false)}
          selectedMemberInfo={selectedMemberInfo}
          setDepartmentSearchText={setDepartmentSearchText}
          departmentSearchText={departmentSearchText}
        />
      )}
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
  color: theme.palette.gray2,
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  gap: 5,
});
