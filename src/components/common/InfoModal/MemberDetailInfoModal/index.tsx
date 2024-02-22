import { PendingMemberInfoType, StatusType } from "@types/entities/member";
import { formatTableValue } from "@utils/formatTableValue";
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
  const getStatus = (status: StatusType) => {
    return status === "PENDING" ? "미완료" : "완료";
  };

  const filterMemberDetailInfo = () => {
    return {
      ["이름"]: memberInfo.name,
      ["학번"]: memberInfo.studentId,
      ["전화번호"]: memberInfo.phone,
      ["소속 학과"]: memberInfo.department,
      ["이메일"]: memberInfo.email,
      ["디스코드 사용자명"]: memberInfo.discordUsername,
      ["디스코드 닉네임"]: memberInfo.nickname,
      ["재학생 인증 여부"]: getStatus(memberInfo.requirement.univStatus),
      ["디스코드 인증 여부"]: getStatus(memberInfo.requirement.discordStatus),
      ["회비 납입 여부"]: getStatus(memberInfo.requirement.paymentStatus),
    };
  };

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer>멤버 상세 정보</TitleContainer>
        <DetailInfoContainer container direction={"column"}>
          {Object.entries(filterMemberDetailInfo()).map(([key, value], index) => (
            <Grid key={index} container gap={2}>
              <DetailInfoTitle>{key}</DetailInfoTitle>
              <DetailInfoField>{formatTableValue(value)}</DetailInfoField>
            </Grid>
          ))}
        </DetailInfoContainer>
      </ModalContentContainer>
    </Modal>
  );
}

const ModalContentContainer = styled(Box)({
  width: "500px",
  height: "340px",
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
