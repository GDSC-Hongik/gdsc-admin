import styled from "@emotion/styled";
import { Box, Grid, Modal } from "@mui/material";
import { theme } from "@/styles/theme";
import { GrantableMemberInfoType, ManagementVariant, PendingMemberInfoType, StatusType } from "@/types/entities/member";
import { formatNullableValue } from "@/utils/formatNullableValue";

type MemberDetailInfoModalProps = {
  variant: Extract<ManagementVariant, "pendingMember" | "grantableMember">
  isModalVisible: boolean;
  handleCloseModal: () => void;
  memberInfo: PendingMemberInfoType | GrantableMemberInfoType;
};

export default function MemberDetailInfoModal({
  variant = "pendingMember",
  isModalVisible,
  handleCloseModal,
  memberInfo,
}: MemberDetailInfoModalProps) {
  const getStatus = (status: StatusType) => {
    return status === "PENDING" ? "미완료" : "완료";
  };

  const filterMemberDetailInfo = () => {
    if (variant === 'pendingMember') {
      return {
        ["이름"]: memberInfo.name,
        ["학번"]: memberInfo.studentId,
        ["전화번호"]: memberInfo.phone,
        ["소속 학과"]: memberInfo.department,
        ["이메일"]: memberInfo.email,
        ["디스코드 사용자명"]: memberInfo.discordUsername,
        ["디스코드 닉네임"]: memberInfo.nickname,
        ["재학생 인증 여부"]: getStatus((memberInfo as PendingMemberInfoType).requirement.univStatus),
        ["디스코드 인증 여부"]: getStatus((memberInfo as PendingMemberInfoType).requirement.discordStatus),
        ["회비 납입 여부"]: getStatus((memberInfo as PendingMemberInfoType).requirement.paymentStatus),
      };
    } else {
      return {
        ["이름"]: memberInfo.name,
        ["학번"]: memberInfo.studentId,
        ["전화번호"]: memberInfo.phone,
        ["소속 학과"]: memberInfo.department,
        ["이메일"]: memberInfo.email,
        ["디스코드 사용자명"]: memberInfo.discordUsername,
        ["디스코드 닉네임"]: memberInfo.nickname,
      };
    }
  };

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer>
        <TitleContainer style={{ marginBottom: "32px" }}>멤버 상세 정보</TitleContainer>
        <DetailInfoContainer container direction={"column"}>
          {Object.entries(filterMemberDetailInfo()).map(([key, value], index) => (
            <Grid key={index} container gap={2}>
              <DetailInfoTitle>{key}</DetailInfoTitle>
              <DetailInfoField>{formatNullableValue(value)}</DetailInfoField>
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
  ...theme.typo.title1,
});

const DetailInfoContainer = styled(Grid)({
  width: "fit-content",
  margin: "auto",
  gap: "10px",
});

const DetailInfoTitle = styled(Box)({
  color: theme.palette.gray7,
  ...theme.typo.title3,
});

const DetailInfoField = styled(Box)({
  ...theme.typo.body1,
});
