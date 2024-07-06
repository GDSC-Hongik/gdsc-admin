import styled from "@emotion/styled";
import { Button, Modal, TextField } from "@mui/material";
import { DetailMemberModalInfoType } from "@/types/entities/member";

type DetailInfoModalPropsType = {
  open: boolean;
  onClose: () => void;
  detailInfo: DetailMemberModalInfoType;
};

export default function MemberDetailInfoModal({
  open,
  onClose,
  detailInfo,
}: DetailInfoModalPropsType) {
  const handleClickConfirm = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>상세 정보</StyledTitle>
        <StyledContentWrapper>
          {Object.entries(detailInfo).map(([key, value], index) => (
            <StyledItem key={index}>
              <StyledText>{key}</StyledText>
              <StyledInfo value={value} inputProps={{ readOnly: true }} />
            </StyledItem>
          ))}
        </StyledContentWrapper>
        <StyledButton variant={"contained"} onClick={handleClickConfirm}>
          확인
        </StyledButton>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const StyledModalContentWrapper = styled("main")({
  width: "988px",
  height: "640px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "40px",
});

const StyledContentWrapper = styled("ul")({
  flex: 1,
  width: "100%",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "auto",
  columnGap: "10px",
  alignContent: "space-between",
});

const StyledTitle = styled("span")({
  fontFamily: "SUIT v1",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "41.6px",
  letterSpacing: "-0.32px",
});

const StyledItem = styled("li")({
  "listStyle": "none",
  "width": "289.333px",
  "height": "89px",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "gap": "8px",
  "&:nth-of-type(5), &:nth-of-type(7)": {
    gridColumn: "span 2",
  },
});

const StyledText = styled("span")({
  fontFamily: "SUIT v1",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "14px",
  letterSpacing: "-0.14px",
});

const StyledInfo = styled(TextField)({
  input: {
    borderRadius: "4px",
    border: "1px solid #6B6B6B",
    boxSizing: "border-box",
    width: "289.333px",
    height: "42px",
    padding: "8px 16px",
  },
});

const StyledButton = styled(Button)({
  padding: "16px 0px",
  width: "328px",
  height: "48px",
});
