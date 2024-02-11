import { formatDate } from "@utils/date/formatDate";
import styled from "@emotion/styled";
import { Button, Stack, Box } from "@mui/material";

type HeaderRightColProps = {
  createdDate: Date;
};

export default function HeaderRightCol({ createdDate }: HeaderRightColProps) {
  return (
    <RightColContainer>
      <DateText>생성 일시 : {formatDate(createdDate)}</DateText>
      <Button variant="outlined">구글 시트 동기화</Button>
      <Button variant="contained">구글 시트</Button>
    </RightColContainer>
  );
}

const RightColContainer = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const DateText = styled(Box)({
  color: "#B0B5BD",
  fontSize: 14,
  fontWeight: "500",
});
