import { PendingMemberInfoType } from "@types/entities/member";
import { Box, Grid, Modal } from "@mui/material";
import styled from "@emotion/styled";

type MemberDetailInfoModalProps = {
  isModalVisible: boolean;
  handleCloseModal: () => void;
  memberInfo: PendingMemberInfoType;
};

export default function MemberDetailInfoModal({
  isModalVisible,
  handleCloseModal,
  memberInfo,
}: MemberDetailInfoModalProps) {
  console.log(memberInfo);

  const filterMemberDetailInfo = (memberInfo: PendingMemberInfoType) => {
    const detailInfoList = [
      {
        name: "이름",
        value: memberInfo.name,
      },
      {
        name: "학번",
        value: memberInfo.studentId,
      },
      {
        name: "소속 학과",
        value: memberInfo.department,
      },
      {
        name: "전화번호",
        value: memberInfo.phone,
      },
      {
        name: "이메일",
        value: memberInfo.email,
      },
    ];

    return detailInfoList;
  };

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer>멤버 상세 정보</TitleContainer>
        <DetailInfoContainer container direction={"column"}>
          {filterMemberDetailInfo(memberInfo).map((detailInfo, index) => (
            <Grid key={index} container gap={2}>
              <DetailInfoTitle>{detailInfo.name}</DetailInfoTitle>
              <DetailInfoField>{detailInfo.value}</DetailInfoField>
            </Grid>
          ))}
        </DetailInfoContainer>
      </ModalContentContainer>
    </Modal>
  );
}

const ModalContentContainer = styled(Box)({
  width: "500px",
  height: "200px",
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

const DetailInfoContainer = styled(Grid)({
  width: "fit-content",
  margin: "auto",
  gap: "10px",
});

const DetailInfoTitle = styled(Box)({
  color: "#888B91",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "16px",
});

const DetailInfoField = styled(Box)({
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "16px",
});
