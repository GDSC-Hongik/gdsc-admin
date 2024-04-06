import { useState, ChangeEvent, useContext } from "react";
import styled from "@emotion/styled";
import { Grid, Checkbox, Button, Box } from "@mui/material";
import EditInfoModal from "../../Modal/EditInfoModal";
import {
  SelectedMemberListContext,
  SelectedMemberDispatchContext,
} from "@/components/context/SelectedMemberContextProvider";
import { theme } from "@/styles/theme";
import { GrantableMemberInfoType } from "@/types/entities/member";
import { go } from "@/utils/fx/go";
import { map } from "@/utils/fx/map";
import { getTableRatio } from "@/utils/getTableRatio";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type GrantableMemberInfoTableBodyProps = {
  dataList: GrantableMemberInfoType[];
};

export default function GrantableMemberInfoTableBody({
  dataList,
}: GrantableMemberInfoTableBodyProps) {
  const [isMemberDetailInfoModalVisible, setIsMemberDetailInfoModalVisible] = useState(false);
  const [selectedMemberDetailInfo, setSelectedMemberDetailInfo] =
    useState<GrantableMemberInfoType>();
  const [departmentSearchText, setDepartmentSearchText] = useState("");

  const selectedMemberList = useContext(SelectedMemberListContext);
  const setSelectedMemberList = useContext(SelectedMemberDispatchContext);

  const filterTableInfo = (dataList: GrantableMemberInfoType[]) => {
    const newDataList: Omit<GrantableMemberInfoType, "memberId">[] = go(
      dataList,
      map(({ studentId, name, phone, department, email, discordUsername, nickname }) => ({
        studentId,
        name,
        phone,
        department,
        email,
        discordUsername,
        nickname,
      })),
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
    setSelectedMemberDetailInfo(dataList[index]);
    setIsMemberDetailInfoModalVisible(true);
  };

  const handleCloseMemberDetailInfoModal = () => setIsMemberDetailInfoModalVisible(false);

  return (
    <Grid container direction={"column"}>
      {filterTableInfo(dataList).map((row, rowIndex) => (
        <CellContainer container key={rowIndex} alignItems={"center"} height={64}>
          <Checkbox checked={checked(rowIndex)} onChange={e => handleChangeCheckbox(e, rowIndex)} />
          {Object.entries(row).map(
            ([key, value], index) =>
              key !== "requirement" && (
                <TextContainer item key={index} xs={getTableRatio(key, "cell", "grantableMember")}>
                  <Text sx={{ wordBreak: "keep-all" }}>
                    {(value as { code: string; name: string })?.name ?? formatNullableValue(value)}
                  </Text>
                </TextContainer>
              ),
          )}
          <ButtonContainer>
            <Button variant="outlined" onClick={() => handleClickDetailInfoButton(rowIndex)}>
              수정
            </Button>
          </ButtonContainer>
        </CellContainer>
      ))}
      {selectedMemberDetailInfo && (
        <EditInfoModal
          isModalVisible={isMemberDetailInfoModalVisible}
          setIsModalVisible={setIsMemberDetailInfoModalVisible}
          selectedMemberInfo={selectedMemberDetailInfo}
          setDepartmentSearchText={setDepartmentSearchText}
          departmentSearchText={departmentSearchText}
          handleCloseModal={handleCloseMemberDetailInfoModal}
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
