import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Checkbox, Grid } from "@mui/material";
import { PendingMemberInfoTableProps } from ".";
import MemberDetailInfoModal from "../../InfoModal/MemberDetailInfoModal";
import { pendingMemberTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/theme";
import { PendingMemberInfoType, PendingMemberTableInfoType } from "@/types/entities/member";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type PendingMemberInfoTableBodyProps = {
  dataList: PendingMemberInfoType[];
  setSelectedMemberList: PendingMemberInfoTableProps["setSelectedMemberList"];
  selectedMemberList: PendingMemberInfoTableProps["selectedMemberList"];
};

export default function PendingMemberInfoTableBody({
  dataList,
  setSelectedMemberList,
  selectedMemberList,
}: PendingMemberInfoTableBodyProps) {
  const [isMemberDetailInfoModalVisible, setIsMemberDetailInfoModalVisible] = useState(false);
  const [selectedMemberDetailInfo, setSelectedMemberDetailInfo] = useState<PendingMemberInfoType>();

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

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.checked) {
      setSelectedMemberList(prevMemberList => [...prevMemberList, dataList[index]]);
    } else {
      setSelectedMemberList(prevMemberList =>
        prevMemberList.filter(data => data.memberId !== dataList[index].memberId),
      );
    }
  };

  const checked = (index: number) => {
    return selectedMemberList.some(
      selectedMember => selectedMember.memberId === dataList[index].memberId,
    );
  };

  const handleClickDetailInfoButton = (index: number) => {
    setIsMemberDetailInfoModalVisible(true);
    setSelectedMemberDetailInfo(dataList[index]);
  };

  const handleCloseMemberDetailInfoModal = () => setIsMemberDetailInfoModalVisible(false);

  return (
    <Grid container direction={"column"}>
      {filterTableInfo(dataList).map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          <Checkbox checked={checked(rowIndex)} onChange={e => handleChangeCheckbox(e, rowIndex)} />
          {Object.entries(row).map(([key, value], index) => (
            <TextContainer item key={index} xs={getTitleWidthRatio(key)}>
              <Text>{formatNullableValue(value)}</Text>
            </TextContainer>
          ))}
          <ButtonContainer>
            <Button variant="outlined" onClick={() => handleClickDetailInfoButton(rowIndex)}>
              상세
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
      {selectedMemberDetailInfo && (
        <MemberDetailInfoModal
          variant={"pendingMember"}
          isModalVisible={isMemberDetailInfoModalVisible}
          handleCloseModal={handleCloseMemberDetailInfoModal}
          memberInfo={selectedMemberDetailInfo}
        />
      )}
    </Grid>
  );
}

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
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "15px",
  flex: 1,
  gap: 5,
});
