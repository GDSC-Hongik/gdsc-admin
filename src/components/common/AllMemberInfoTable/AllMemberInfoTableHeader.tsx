import { allMemberTableTitle, allMemberTableWidthRatio } from "@constants/table";
import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";

export default function AllMemberInfoTableHeader() {
  const getTitleWidthRatio = (title: string) => {
    return title === "학번" || title === "이름" || title === "전화번호"
      ? allMemberTableWidthRatio["title"][title]
      : allMemberTableWidthRatio["title"]["default"];
  };

  return (
    <Container container xs={12}>
      {allMemberTableTitle.map(title => (
        <Title
          item
          xs={getTitleWidthRatio(title.name)}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text>{title.name}</Text>
        </Title>
      ))}
      <EmptyTitle />
    </Container>
  );
}

const Container = styled(Grid)({
  borderBottom: "1px solid #0000001F",
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

const EmptyTitle = styled.div({
  flex: 1,
});
