import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { HeaderProps } from ".";
import AcceptMemberListModal from "../InfoModal/AcceptMemberListModal";
import { ManagementVariant } from "@/types/entities/member";
// import { formatDate } from "@/utils/date/formatDate";

const HeaderRightElement = <T extends ManagementVariant>(
  createdDate: HeaderRightColProps<T>["createdDate"],
  selectedMemberCount: HeaderRightColProps<T>["selectedMemberCount"],
  setIsAcceptModalVisible: Dispatch<SetStateAction<boolean>>,
): Record<ManagementVariant, ReactElement | null> => {
  const handleClickAcceptMemberButton = () => setIsAcceptModalVisible(true);

  return {
    allMember: createdDate
      ? // <RightColContainer>
        //   <DateText>생성 일시 : {formatDate(createdDate)}</DateText>
        //   <Button variant="outlined">구글 시트 동기화</Button>
        //   <Button variant="contained">구글 시트</Button>
        // </RightColContainer>
        null
      : null,
    pendingMember: (
      <RightColContainer>
        <SelectedMemberCountText>{selectedMemberCount}명 선택</SelectedMemberCountText>
        <StyledButton variant="outlined" onClick={handleClickAcceptMemberButton}>
          승인
        </StyledButton>
      </RightColContainer>
    ),
    grantableMember: (
      <RightColContainer>
        <SelectedMemberCountText>{selectedMemberCount}명 선택</SelectedMemberCountText>
        <StyledButton variant="outlined" onClick={handleClickAcceptMemberButton}>
          승인
        </StyledButton>
      </RightColContainer>
    ),
    paymentStatus: null,
  };
};

type HeaderRightColProps<T extends ManagementVariant> = {
  variant: T;
  createdDate?: T extends "allMember" ? Date : undefined;
  selectedMemberCount: HeaderProps<T>["selectedMemberCount"];
  selectedMemberList: HeaderProps<T>["selectedMemberList"];
};

export default function HeaderRightCol<T extends ManagementVariant>({
  variant,
  createdDate,
  selectedMemberCount,
  selectedMemberList,
}: HeaderRightColProps<T>) {
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);

  return (
    <>
      {HeaderRightElement(createdDate, selectedMemberCount, setIsAcceptModalVisible)[variant]}
      <AcceptMemberListModal
        isAcceptModalVisible={isAcceptModalVisible}
        setIsAcceptModalVisible={setIsAcceptModalVisible}
        selectedMemberList={selectedMemberList}
      />
    </>
  );
}

const RightColContainer = styled(Stack)`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

// const DateText = styled(Box)({
//   color: `${theme.palette.gray5}`,
//   ...theme.typo.body2,
// });

const SelectedMemberCountText = styled(Typography)({
  marginRight: "20px",
});

const StyledButton = styled(Button)({
  marginRight: 15,
});
