import styled from "@emotion/styled";
import { Box, Grid, Modal } from "@mui/material";
import { theme } from "@/styles/theme";
import {
  GrantableMemberInfoType,
  ManagementVariant,
  PendingMemberInfoType,
  StatusType,
} from "@/types/entities/member";
import { formatNullableValue } from "@/utils/validation/formatNullableValue";

type MemberDetailInfoModalProps = {
  variant: Extract<ManagementVariant, "pendingMember" | "grantableMember">;
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
    const {
      name,
      studentId,
      phone,
      department: { name: departmentName },
      email,
      discordUsername,
      nickname,
    } = memberInfo;

    const {
      requirement: { univStatus, discordStatus, paymentStatus, bevyStatus },
    } = memberInfo as PendingMemberInfoType;

    const commonInfo = {
      ["이름"]: name,
      ["학번"]: studentId,
      ["전화번호"]: phone,
      ["소속 학과"]: departmentName,
      ["이메일"]: email,
      ["디스코드 사용자명"]: discordUsername,
      ["디스코드 닉네임"]: nickname,
    };

    const pendingMemberInfo = {
      ...commonInfo,
      ["재학생 인증 여부"]: getStatus(univStatus),
      ["디스코드 인증 여부"]: getStatus(discordStatus),
      ["회비 납입 여부"]: getStatus(paymentStatus),
      ["bevy 인증 여부"]: getStatus(bevyStatus),
    };

    return variant === "pendingMember" ? pendingMemberInfo : commonInfo;
  };

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <ModalContentContainer sx={{ height: variant === "grantableMember" ? "240px" : "350px" }}>
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
