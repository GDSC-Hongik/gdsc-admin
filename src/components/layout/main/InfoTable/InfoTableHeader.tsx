import { selectOptionData } from "@constants/selectOptionData";
import styled from "@emotion/styled";
import { TableRow, TableCell, TableHead } from "@mui/material";

export default function InfoTableHeader() {
  return (
    <TableHead>
      <TableRow>
        {selectOptionData.map(option => (
          <CellTitle align="center">{option.name}</CellTitle>
        ))}
        <EmptyCellTitle align="center"></EmptyCellTitle>
      </TableRow>
    </TableHead>
  );
}

const CellTitle = styled(TableCell)({
  fontSize: "12px",
  fontWeight: "500",
  whiteSpace: "pre-wrap",
  padding: "10px",
});

const EmptyCellTitle = styled(TableCell)({
  fontSize: "12px",
  whiteSpace: "pre-wrap",
});
