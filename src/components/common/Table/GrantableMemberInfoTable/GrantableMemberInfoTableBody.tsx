import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Grid, Checkbox, Button, Box } from "@mui/material";
import { GrantableMemberInfoTableProps } from ".";
import MemberDetailInfoModal from "../../InfoModal/MemberDetailInfoModal";
import { grantableMemberTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/theme";
import { GrantableMemberInfoType } from "@/types/entities/member";
import { formatNullableValue } from "@/utils/formatNullableValue";

type GrantableMemberInfoTableBodyProps = {
  dataList: GrantableMemberInfoType[];
  setSelectedMemberList: GrantableMemberInfoTableProps["setSelectedMemberList"];
  selectedMemberList: GrantableMemberInfoTableProps["selectedMemberList"];
};

export default function GrantableMemberInfoTableBody({
  dataList,
  setSelectedMemberList,
  selectedMemberList,
}: GrantableMemberInfoTableBodyProps) {
  const [isMemberDetailInfoModalVisible, setIsMemberDetailInfoModalVisible] = useState(false);
  const [selectedMemberDetailInfo, setSelectedMemberDetailInfo] = useState<GrantableMemberInfoType>();

  const filterTableInfo = (dataList: GrantableMemberInfoType[]) => {
    const newDataList: Omit<GrantableMemberInfoType, "memberId">[] = [];

    dataList.forEach(data => {
      newDataList.push({
        studentId: data.studentId,
        name: data.name,
        phone: data.phone,
        department: data.department,
        email: data.email,
        discordUsername: data.discordUsername,
        nickname: data.nickname,
      });
    });

    return newDataList;
  };

  const getTitleWidthRatio = (title: string) => {
    return title === "studentId" || title === "name" || title === "phone"
      ? grantableMemberTableWidthRatio["cell"][title]
      : grantableMemberTableWidthRatio["cell"]["default"];
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
          variant={"grantableMember"}
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
