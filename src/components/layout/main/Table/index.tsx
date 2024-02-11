import { selectOptionData } from "@constants/selectOptionData";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  tablePaginationClasses,
  TableRow,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState } from "react";

const rows = [
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
  },
  {
    id: "C123123",
    name: "홍서현",
    phoneNumber: "01012341234",
    dept: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    discordNickname: "ghdtjgus76",
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
      <TableHead>
        <TableRow>
          {selectOptionData.map(option => (
            <TableCell
              align="center"
              sx={{ fontSize: "12px", fontWeight: "500", whiteSpace: "pre-wrap", padding: "14px" }}
            >
              {option.name}
            </TableCell>
          ))}
          <TableCell align="center" sx={{ fontSize: "12px", whiteSpace: "pre-line" }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map(row => (
          <TableRow key={row.id}>
            {Object.values(row).map((value, index) => (
              <TableCell key={index} sx={{ fontSize: "12px", textAlign: "center" }}>
                {value}
              </TableCell>
            ))}
            <TableCell sx={{ padding: "5px" }}>
              <div style={{ display: "flex", gap: 5 }}>
                <Button variant="outlined">수정</Button>
                <Button variant="outlined" color="error">
                  탈퇴
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
            align={"right"}
            sx={{
              [`& .${tablePaginationClasses.spacer}`]: {
                display: "none",
              },
              [`& .${tablePaginationClasses.toolbar}`]: {
                justifyContent: "flex-end",
              },
            }}
          />
        </TableRow>
      </TableFooter>
    </TableContainer>
  );
}
