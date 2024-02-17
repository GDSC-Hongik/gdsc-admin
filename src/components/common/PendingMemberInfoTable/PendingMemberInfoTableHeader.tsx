import { pendingMemberTableTitle, pendingMemberTableWidthRatio } from "@constants/table";
import { PendingMemberInfoType } from "@types/entities/member";
import { PendingMemberInfoTableProps } from ".";
import styled from "@emotion/styled";
import { Box, Checkbox, Grid } from "@mui/material";
import { ChangeEvent } from "react";

type PendingMemberInfoTableHeaderProps = {
  dataList: PendingMemberInfoType[];
  setSelectedMemberList: PendingMemberInfoTableProps["setSelectedMemberList"];
};

export default function PendingMemberInfoTableHeader({
  dataList,
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

  return (
    <Container container>
      <Checkbox onChange={handleChangeCheckbox} />
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
