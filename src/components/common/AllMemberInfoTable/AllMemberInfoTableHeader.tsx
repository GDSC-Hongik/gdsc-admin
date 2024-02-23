import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import { allMemberTableTitle, allMemberTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/typo";

export default function AllMemberInfoTableHeader() {
  const getTitleWidthRatio = (title: string) => {
    return title === "학번" || title === "이름" || title === "전화번호"
      ? allMemberTableWidthRatio["title"][title]
      : allMemberTableWidthRatio["title"]["default"];
  };

  return (
    <Container container>
      {allMemberTableTitle.map(title => (
        <Title
          item
          key={title.value}
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
  borderBottom: `1px solid ${theme.palette.gray1}`,
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
  color: theme.palette.gray2,
});

const EmptyTitle = styled.div({
  flex: 1,
});
