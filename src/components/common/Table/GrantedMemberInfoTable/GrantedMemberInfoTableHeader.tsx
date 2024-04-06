import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { commonMemberTableTitle, allMemberTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/theme";
import { TableRatioType } from "@/types/entities/table";

export default function GrantedMemberInfoTableHeader() {
  const getTitleWidthRatio = (option: string, variant: TableRatioType) => {
    return (
      allMemberTableWidthRatio[variant][option] ?? allMemberTableWidthRatio[variant]["default"]
    );
  };

  return (
    <Container container>
      {commonMemberTableTitle.map(title => (
        <Title
          item
          key={title.value}
          xs={getTitleWidthRatio(title.name, "title")}
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
