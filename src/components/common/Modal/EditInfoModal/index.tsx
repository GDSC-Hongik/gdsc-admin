import styled from "@emotion/styled";
import { Modal, Box, Typography } from "@mui/material";

export type EditMemberInfoType = {
  memberId: number;
  studentId: number;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string;
  nickname: string;
};

type EditInfoModalProps = {
  open: boolean;
  onClose: () => void;
  memberInfo: EditMemberInfoType;
};

export default function EditInfoModal({ open, onClose, memberInfo }: EditInfoModalProps) {
  // const editMemberMutation = useEditMemberInfoMutation(
  //   memberId,
  //   {
  //     studentId,
  //     name,
  //     phone: formatPhoneNumber(phone),
  //     department: departmentCode,
  //     email,
  //     discordUsername: discordUsername || null,
  //     nickname: nickname || null,
  //   },
  //   () => setIsModalVisible(false),
  // );

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <Typography>{memberInfo.name}</Typography>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const StyledModalContentWrapper = styled(Box)({
  width: "680px",
  height: "450px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
});
