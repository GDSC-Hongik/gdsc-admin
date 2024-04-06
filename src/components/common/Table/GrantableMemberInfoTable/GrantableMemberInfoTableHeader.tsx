import { ChangeEvent, useContext } from "react";
import styled from "@emotion/styled";
import { Grid, Box, Checkbox } from "@mui/material";
import {
  SelectedMemberListContext,
  SelectedMemberDispatchContext,
} from "@/components/context/SelectedMemberContextProvider";
import { grantableStatusTableTitle } from "@/constants/table";
import { theme } from "@/styles/theme";
import { GrantableMemberInfoType } from "@/types/entities/member";
import { getTableRatio } from "@/utils/getTableRatio";

type GrantableMemberInfoTableHeaderProps = {
  dataList: GrantableMemberInfoType[];
};

export default function GrantableMemberInfoTableHeader({
  dataList,
}: GrantableMemberInfoTableHeaderProps) {
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
      {grantableStatusTableTitle.map((title, index) => (
        <Title
          item
          xs={getTableRatio(title.name, "title", "grantableMember")}
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
