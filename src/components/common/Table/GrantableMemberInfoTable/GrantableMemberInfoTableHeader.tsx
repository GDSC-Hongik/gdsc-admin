import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import { grantableMemberTableWidthRatio, grantableStatusTableTitle } from "@/constants/table";
import { theme } from "@/styles/theme";

export default function GrantableMemberInfoTableHeader() {
  const getTitleWidthRatio = (title: string) => {
    return title === "학번" || title === "이름" || title === "전화번호"
      ? grantableMemberTableWidthRatio["title"][title]
      : grantableMemberTableWidthRatio["title"]["default"];
  };

  return (
    <Container container xs={12}>
      {grantableStatusTableTitle.map(title => (
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
  borderBottom: `1px solid ${theme.palette.gray1}`,
});

const Title = styled(Grid)({
  padding: 16,
  textAlign: "center",
});

const Text = styled(Box)({
  ...theme.typo.body2,
  maxHeight: "52px",
  color: theme.palette.gray2,
});

const EmptyTitle = styled.div({
  flex: 1,
});
