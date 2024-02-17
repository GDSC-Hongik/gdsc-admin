import { selectOptionData, tableWidthRatio } from "@constants/table";
import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";

export default function AllMemberInfoTableHeader() {
  const getTitleWidthRatio = (option: string) => {
    return option === "학번" || option === "이름" || option === "전화번호"
      ? tableWidthRatio["title"][option]
      : tableWidthRatio["title"]["default"];
  };

  return (
    <Container container xs={12}>
      {selectOptionData.map(option => (
        <Title
          item
          xs={getTitleWidthRatio(option.name)}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text>{option.name}</Text>
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
