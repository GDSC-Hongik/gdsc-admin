import { InfoTableRowType } from "@types/main";
import { TableFooter, TableRow, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

type InfoTableFooterProps = {
  rows: InfoTableRowType[];
  rowsPerPage: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  page: number;
};

export default function InfoTableFooter({
  rows,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
}: InfoTableFooterProps) {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          align={"right"}
        />
      </TableRow>
    </TableFooter>
  );
}
