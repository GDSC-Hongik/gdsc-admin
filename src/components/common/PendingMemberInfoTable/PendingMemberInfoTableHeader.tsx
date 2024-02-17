import { pendingMemberTableTitle, pendingMemberTableWidthRatio } from "@constants/table";
import styled from "@emotion/styled";
import { Box, Checkbox, Grid } from "@mui/material";

export default function PendingMemberInfoTableHeader() {
  const getTitleWidthRatio = (title: string) => {
    return title === "학번" || title === "이름" || title === "전화번호"
      ? pendingMemberTableWidthRatio["title"][title]
      : pendingMemberTableWidthRatio["title"]["default"];
  };

  return (
    <Container container>
      <Checkbox />
      {pendingMemberTableTitle.map(title => (
        <Title
          item
          xs={getTitleWidthRatio(title.name)}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text>{title.name}</Text>
        </Title>
      ))}
    </Container>
  );
}

const Container = styled(Grid)({
  height: "56px",
  flex: 1,
});

const Title = styled(Grid)({
  padding: 16,
  textAlign: "center",
});

const Text = styled(Box)({
  maxHeight: "52px",
  fontWeight: 500,
  lineHeight: "24px",
  fontSize: "14px",
  color: "000000DD",
});
