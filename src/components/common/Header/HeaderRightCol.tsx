import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import { HeaderProps } from ".";
import AcceptMemberListModal from "../InfoModal/AcceptMemberListModal";
import { allMemberApi } from "@/apis/allMemberApi";
import { ManagementVariant } from "@/types/entities/member";

const HeaderRightElement = <T extends ManagementVariant>(
  selectedMemberCount: HeaderRightColProps<T>["selectedMemberCount"],
  setIsAcceptModalVisible: Dispatch<SetStateAction<boolean>>,
): Record<ManagementVariant, ReactElement | null> => {
  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      const blob = new Blob([data], { type: "application/vnd.ms-excel" });
      saveAs(blob, "members.xls");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  }
  const handleClickAcceptMemberButton = () => setIsAcceptModalVisible(true);

  return {
    allMember: (
      <RightColContainer>
        <Button
          variant="outlined"
          onClick={handleClickExcelDownloadButton}
          sx={{ marginRight: '20px' }}
        >
          엑셀 다운로드
        </Button>
      </RightColContainer>
    ),
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
    grantedMember: null,
    paymentStatus: null,
  };
};

type HeaderRightColProps<T extends ManagementVariant> = {
  variant: T;
  selectedMemberCount: HeaderProps<T>["selectedMemberCount"];
  selectedMemberList: HeaderProps<T>["selectedMemberList"];
};

export default function HeaderRightCol<T extends ManagementVariant>({
  variant,
  selectedMemberCount,
  selectedMemberList,
}: HeaderRightColProps<T>) {
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);

  return (
    <>
      {HeaderRightElement(selectedMemberCount, setIsAcceptModalVisible)[variant]}
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

const SelectedMemberCountText = styled(Typography)({
  marginRight: "20px",
});

const StyledButton = styled(Button)({
  marginRight: 15,
});
