import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Box, Checkbox, Grid } from "@mui/material";
import { PendingMemberInfoTableProps } from ".";
import { pendingMemberTableTitle, pendingMemberTableWidthRatio } from "@/constants/table";
import { theme } from "@/styles/theme";
import { PendingMemberInfoType } from "@/types/entities/member";

type PendingMemberInfoTableHeaderProps = {
  dataList: PendingMemberInfoType[];
  selectedMemberList: PendingMemberInfoTableProps["selectedMemberList"];
  setSelectedMemberList: PendingMemberInfoTableProps["setSelectedMemberList"];
};

export default function PendingMemberInfoTableHeader({
  dataList,
  selectedMemberList,
  setSelectedMemberList,
}: PendingMemberInfoTableHeaderProps) {
  const getTitleWidthRatio = (title: string) => {
    return title === "학번" || title === "이름" || title === "전화번호"
      ? pendingMemberTableWidthRatio["title"][title]
      : pendingMemberTableWidthRatio["title"]["default"];
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedMemberList(dataList);
    } else {
      setSelectedMemberList([]);
    }
  };

  const checked = selectedMemberList.length === dataList.length;

  return (
    <Container container>
      <Checkbox checked={checked} onChange={handleChangeCheckbox} />
      {pendingMemberTableTitle.map((title, index) => (
        <Title
          item
          xs={getTitleWidthRatio(title.name)}
          key={index}
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
  borderBottom: `1px solid ${theme.palette.gray1}`,
});

const Title = styled(Grid)({
  padding: 16,
  textAlign: "center",
});

const Text = styled(Box)({
  maxHeight: "52px",
  ...theme.typo.body2,
  color: "000000DD",
});
