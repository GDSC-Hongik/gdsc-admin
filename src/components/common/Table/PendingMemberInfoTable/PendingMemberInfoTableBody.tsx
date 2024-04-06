import { ChangeEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Checkbox, Grid } from "@mui/material";
import MemberDetailInfoModal from "../../Modal/MemberDetailInfoModal";
import {
  SelectedMemberListContext,
  SelectedMemberDispatchContext,
} from "@/components/context/SelectedMemberContextProvider";
import { theme } from "@/styles/theme";
import { PendingMemberInfoType, PendingMemberTableInfoType } from "@/types/entities/member";
import { go } from "@/utils/fx/go";
import { map } from "@/utils/fx/map";
import { getTableRatio } from "@/utils/getTableRatio";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type PendingMemberInfoTableBodyProps = {
  dataList: PendingMemberInfoType[];
};

export default function PendingMemberInfoTableBody({ dataList }: PendingMemberInfoTableBodyProps) {
  const [isMemberDetailInfoModalVisible, setIsMemberDetailInfoModalVisible] = useState(false);
  const [selectedMemberDetailInfo, setSelectedMemberDetailInfo] = useState<PendingMemberInfoType>();

  const selectedMemberList = useContext(SelectedMemberListContext);
  const setSelectedMemberList = useContext(SelectedMemberDispatchContext);

  const filterTableInfo = (dataList: PendingMemberInfoType[]) => {
    const newDataList: PendingMemberTableInfoType[] = go(
      dataList,
      map(
        ({
          studentId,
          name,
          phone,
          discordUsername,
          nickname,
          requirement: { paymentStatus },
        }) => ({
          studentId,
          name,
          phone,
          discordUsername,
          nickname,
          paymentStatus: paymentStatus === "PENDING" ? "미완료" : "완료",
        }),
      ),
    );

    return newDataList;
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
            <TextContainer item key={index} xs={getTableRatio(key, "cell", "pendingMember")}>
              <Text sx={{ wordBreak: "keep-all" }}>{formatNullableValue(value)}</Text>
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
