import { Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";
import AcceptMemberListModal from "../InfoModal/AcceptMemberListModal";
import { allMemberApi } from "@/apis/allMemberApi";
import { SelectedMemberListContext } from "@/components/context/SelectedMemberContextProvider";
import { ManagementVariant } from "@/types/entities/member";
import { downloadExcelFile } from "@/utils/excel";

const HeaderRightElement = (
  selectedMemberCount: number,
  setIsAcceptModalVisible: Dispatch<SetStateAction<boolean>>,
): Record<ManagementVariant, ReactElement | null> => {
  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      downloadExcelFile(data, "members");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  };

  const handleClickAcceptMemberButton = () => setIsAcceptModalVisible(true);

  const renderCommonRightElement = () => (
    <RightColContainer>
      <SelectedMemberCountText>{selectedMemberCount}명 선택</SelectedMemberCountText>
      <StyledButton variant="outlined" onClick={handleClickAcceptMemberButton}>
        승인
      </StyledButton>
    </RightColContainer>
  );

  const renderAllMemberRightElement = () => (
    <RightColContainer>
      <Button
        variant="outlined"
        onClick={handleClickExcelDownloadButton}
        sx={{ marginRight: "20px" }}
      >
        엑셀 다운로드
      </Button>
    </RightColContainer>
  );

  return {
    allMember: renderAllMemberRightElement(),
    pendingMember: renderCommonRightElement(),
    grantableMember: renderCommonRightElement(),
    grantedMember: null,
    paymentStatus: null,
  };
};

type HeaderRightColProps = {
  variant: ManagementVariant;
};

export default function HeaderRightCol({ variant }: HeaderRightColProps) {
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);
  const selectedMemberList = useContext(SelectedMemberListContext);

  return (
    <>
      {HeaderRightElement(selectedMemberList.length, setIsAcceptModalVisible)[variant]}
      <AcceptMemberListModal
        isAcceptModalVisible={isAcceptModalVisible}
        setIsAcceptModalVisible={setIsAcceptModalVisible}
      />
    </>
  );
}

const RightColContainer = styled(Stack)({
  gap: "10px",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const SelectedMemberCountText = styled(Typography)({
  marginRight: "20px",
});

const StyledButton = styled(Button)({
  marginRight: 15,
});
