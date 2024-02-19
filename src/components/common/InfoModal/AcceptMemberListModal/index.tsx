import { HeaderProps } from "@components/common/Header";
import { allMemberTableTitle, pendingMemberModalWidthRatio } from "@constants/table";
import { ManagementVariant } from "@types/entities/member";
import { Modal, Grid, Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";

type AcceptMemberListModalProps<T extends ManagementVariant> = {
  isAcceptModalVisible: boolean;
  setIsAcceptModalVisible: Dispatch<SetStateAction<boolean>>;
  selectedMemberList: HeaderProps<T>["selectedMemberList"];
};

export default function AcceptMemberListModal<T extends ManagementVariant>({
  isAcceptModalVisible,
  setIsAcceptModalVisible,
  selectedMemberList,
}: AcceptMemberListModalProps<T>) {
  const getTableWidth = (option: string, variant: "title" | "cell") => {
    if (variant === "title") {
      return option === "학번" || option === "이름"
        ? pendingMemberModalWidthRatio["title"][option]
        : pendingMemberModalWidthRatio["title"]["default"];
    } else {
      return option === "studentId" || option === "name"
        ? pendingMemberModalWidthRatio["cell"][option]
        : pendingMemberModalWidthRatio["cell"]["default"];
    }
  };

  const filterSelectedMemberList = () => {
    const filteredSelectedMemberList = selectedMemberList?.map(selectedMember => ({
      studentId: selectedMember.studentId,
      name: selectedMember.name,
      phone: selectedMember.phone,
      department: selectedMember.department,
      email: selectedMember.email,
      discordUsername: selectedMember.discordUsername,
      nickname: selectedMember.nickname,
    }));

    return filteredSelectedMemberList;
  };

  const handleCloseModal = () => setIsAcceptModalVisible(false);

  const filteredSelectedMemberList = filterSelectedMemberList();

  return (
    <Modal open={isAcceptModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer>가입 승인 명단 확인</TitleContainer>
        {filteredSelectedMemberList?.length ? (
          <>
            <BodyContainer>
              <BodyCellTitle container justifyContent={"center"} alignItems={"center"}>
                {allMemberTableTitle.map(tableTitle => (
                  <ColumnTitle key={tableTitle.value} xs={getTableWidth(tableTitle.name, "title")}>
                    {tableTitle.name}
                  </ColumnTitle>
                ))}
              </BodyCellTitle>
              <BodyCellRowContainer>
                {filteredSelectedMemberList?.map(selectedMember => (
                  <BodyCellRow container alignItems="center" justifyContent="center">
                    {Object.entries(selectedMember).map(([key, value]) => (
                      <BodyCell xs={getTableWidth(key, "cell")}>{value}</BodyCell>
                    ))}
                  </BodyCellRow>
                ))}
              </BodyCellRowContainer>
            </BodyContainer>
            <StyledButton variant={"contained"} size="large">
              승인하기
            </StyledButton>
          </>
        ) : (
          <EmptyTextContainer container alignItems="center" justifyContent="center">
            <Box>선택된 멤버가 없습니다. 멤버 선택 후 다시 확인해주세요.</Box>
          </EmptyTextContainer>
        )}
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
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "133.4%",
  marginBottom: "32px",
});

const BodyContainer = styled.div({
  height: "300px",
  marginBottom: "30px",
  textAlign: "center",
});

const BodyCellTitle = styled(Grid)({
  height: "56px",
  borderBottom: "1px solid #0000001E",
});

const BodyCellRowContainer = styled.div({
  "overflow-y": "auto",
  "maxHeight": "240px",

  "&::-webkit-scrollbar": {
    width: "8px",
    borderRadius: "20px",
    backgroundColor: "#f5f5f5",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "20px",
  },
});

const BodyCellRow = styled(Grid)({
  height: "52px",
  borderBottom: "1px solid #0000001E",
});

const BodyCell = styled(Grid)({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
});

const StyledButton = styled(Button)({
  width: "216px",
  height: "43px",
});

const ColumnTitle = styled(Grid)({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
});

const EmptyTextContainer = styled(Grid)({
  height: "60%",
});
