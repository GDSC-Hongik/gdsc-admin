import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { commonMemberTableTitle } from "@/constants/table";
import { theme } from "@/styles/theme";
import { getTableRatio } from "@/utils/getTableRatio";

export default function GrantedMemberInfoTableHeader() {
  return (
    <Container container>
      {commonMemberTableTitle.map(title => (
        <Title
          item
          key={title.value}
          xs={getTableRatio(title.name, "title", "grantedMember")}
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
  color: theme.palette.gray2,
  maxHeight: "52px",
});

const EmptyTitle = styled.div({
  flex: 1,
});
