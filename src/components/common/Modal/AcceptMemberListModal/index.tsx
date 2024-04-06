import { Dispatch, Fragment, SetStateAction, useContext } from "react";
import styled from "@emotion/styled";
import { Modal, Grid, Box, Button } from "@mui/material";
import { SelectedMemberListContext } from "@/components/context/SelectedMemberContextProvider";
import { commonMemberTableTitle } from "@/constants/table";
import useGrantMemberMutation from "@/hooks/mutations/useGrantMemberMutation";
import { theme } from "@/styles/theme";
import { PendingMemberInfoType, AllMemberInfoType } from "@/types/entities/member";
import { DepartmentType } from "@/types/entities/table";
import { go } from "@/utils/fx/go";
import { map } from "@/utils/fx/map";
import { getTableRatio } from "@/utils/getTableRatio";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type AcceptMemberListModalProps = {
  isAcceptModalVisible: boolean;
  setIsAcceptModalVisible: Dispatch<SetStateAction<boolean>>;
};

export default function AcceptMemberListModal({
  isAcceptModalVisible,
  setIsAcceptModalVisible,
}: AcceptMemberListModalProps) {
  const selectedMemberList = useContext(SelectedMemberListContext);

  const grantMemberMutation = useGrantMemberMutation();

  const filterSelectedMemberList = (): PendingMemberInfoType[] | AllMemberInfoType[] => {
    const filteredMemberList = go(
      selectedMemberList || [],
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

    return filteredMemberList;
  };

  const handleCloseModal = () => setIsAcceptModalVisible(false);

  const filteredSelectedMemberList = filterSelectedMemberList();

  const handleClickGrantMemberButton = () => {
    const memberIdList = go(
      selectedMemberList || [],
      map(({ memberId }) => memberId),
    );

    !!memberIdList.length && grantMemberMutation.mutate({ memberIdList });

    setIsAcceptModalVisible(false);
  };

  if (!filteredSelectedMemberList?.length) {
    return (
      <Modal open={isAcceptModalVisible} onClose={handleCloseModal}>
        <ModalContentContainer>
          <TitleContainer sx={{ marginBottom: "32px" }}>가입 승인 명단 확인</TitleContainer>
          <EmptyTextContainer container alignItems="center" justifyContent="center">
            <Box>선택된 멤버가 없습니다. 멤버 선택 후 다시 확인해주세요.</Box>
          </EmptyTextContainer>
        </ModalContentContainer>
      </Modal>
    );
  }

  return (
    <Modal open={isAcceptModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer sx={{ marginBottom: "32px" }}>가입 승인 명단 확인</TitleContainer>
        <Fragment>
          <BodyContainer>
            <BodyCellTitle container justifyContent={"center"} alignItems={"center"}>
              {commonMemberTableTitle.map((tableTitle, index) => (
                <ColumnTitle
                  key={index}
                  xs={getTableRatio(tableTitle.name, "title", "pendingMember", true)}
                >
                  {tableTitle.name}
                </ColumnTitle>
              ))}
            </BodyCellTitle>
            <BodyCellRowContainer>
              {filteredSelectedMemberList?.map((selectedMember, index: number) => (
                <BodyCellRow container key={index} alignItems="center" justifyContent="center">
                  {Object.entries(selectedMember).map(([key, value], index) => (
                    <BodyCell xs={getTableRatio(key, "cell", "pendingMember", true)} key={index}>
                      {(value as DepartmentType)?.name ?? formatNullableValue(value)}
                    </BodyCell>
                  ))}
                </BodyCellRow>
              ))}
            </BodyCellRowContainer>
          </BodyContainer>
          <StyledButton variant={"contained"} size="large" onClick={handleClickGrantMemberButton}>
            승인하기
          </StyledButton>
        </Fragment>
      </ModalContentContainer>
    </Modal>
  );
}

const ModalContentContainer = styled(Box)({
  width: "900px",
  height: "440px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "64px 63px 44px 63px",
  textAlign: "center",
});

const TitleContainer = styled(Box)({
  ...theme.typo.title1,
});

const BodyContainer = styled.div({
  height: "300px",
  marginBottom: "30px",
  textAlign: "center",
});

const BodyCellTitle = styled(Grid)({
  height: "56px",
  borderBottom: `1px solid ${theme.palette.black2}`,
});

const BodyCellRowContainer = styled.div({
  "overflowY": "auto",
  "maxHeight": "240px",

  "&::-webkit-scrollbar": {
    width: "8px",
    borderRadius: "20px",
    backgroundColor: theme.palette.white1,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.gray8,
    borderRadius: "20px",
  },
});

const BodyCellRow = styled(Grid)({
  height: "52px",
  borderBottom: `1px solid ${theme.palette.black2}`,
});

const BodyCell = styled(Grid)({
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "21px",
  wordBreak: "keep-all",
});

const StyledButton = styled(Button)({
  width: "216px",
  height: "43px",
});

const ColumnTitle = styled(Grid)({
  ...theme.typo.body2,
});

const EmptyTextContainer = styled(Grid)({
  height: "60%",
});
