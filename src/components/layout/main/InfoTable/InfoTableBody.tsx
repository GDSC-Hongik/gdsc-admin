import { InfoTableRowType } from "@types/main";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import styled from "@emotion/styled";

type InfoTableBodyProps = {
  rowsPerPage: number;
  emptyRows: number;
  page: number;
  rows: InfoTableRowType[];
};

export default function InfoTableBody({ rowsPerPage, emptyRows, page, rows }: InfoTableBodyProps) {
  const getTableData = (): InfoTableBodyProps["rows"] => {
    return rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows;
  };

  return (
    <TableBody>
      {getTableData()?.map(row => (
        <TableRow key={row.memberId}>
          {Object.entries(row).map(
            ([key, value], index) => key !== "memberId" && <CellText key={index}>{value}</CellText>,
          )}
          <ButtonCellContainer>
            <ButtonContainer>
              <Button variant="outlined">수정</Button>
              <Button variant="outlined" color="error">
                탈퇴
              </Button>
            </ButtonContainer>
          </ButtonCellContainer>
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <EmptyTableRow emptyRows={emptyRows}>
          <TableCell colSpan={6} />
        </EmptyTableRow>
      )}
    </TableBody>
  );
}

const CellText = styled(TableCell)({
  fontSize: "12px",
  textAlign: "center",
});

const ButtonCellContainer = styled.div({
  padding: "0px",
});

const ButtonContainer = styled(TableCell)({
  display: "flex",
  gap: 5,
});

const EmptyTableRow = styled(TableRow)(({ emptyRows }: { emptyRows: number }) => ({
  height: 53 * emptyRows,
}));
