import InfoTableBody from "./InfoTableBody";
import InfoTableHeader from "./InfoTableHeader";
import InfoTableFooter from "./InfoTableFooter";
import { Paper, TableContainer } from "@mui/material";
import { useState } from "react";

const rows = [
  {
    memberId: "1",
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
  },
  {
    memberId: "1",
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
  },
];

export default function Table() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ overflow: "visible" }}>
      <InfoTableHeader />
      <InfoTableBody rowsPerPage={rowsPerPage} emptyRows={emptyRows} page={page} rows={rows} />
      <InfoTableFooter
        rows={rows}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
      />
    </TableContainer>
  );
}
