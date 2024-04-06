import { ChangeEvent, useContext } from "react";
import styled from "@emotion/styled";
import { Box, Checkbox, Grid } from "@mui/material";
import {
  SelectedMemberListContext,
  SelectedMemberDispatchContext,
} from "@/components/context/SelectedMemberContextProvider";
import { pendingMemberTableTitle } from "@/constants/table";
import { theme } from "@/styles/theme";
import { PendingMemberInfoType } from "@/types/entities/member";
import { getTableRatio } from "@/utils/getTableRatio";

type PendingMemberInfoTableHeaderProps = {
  dataList: PendingMemberInfoType[];
};

export default function PendingMemberInfoTableHeader({
  dataList,
}: PendingMemberInfoTableHeaderProps) {
  const selectedMemberList = useContext(SelectedMemberListContext);
  const setSelectedMemberList = useContext(SelectedMemberDispatchContext);

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
          xs={getTableRatio(title.name, "title", "pendingMember")}
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
