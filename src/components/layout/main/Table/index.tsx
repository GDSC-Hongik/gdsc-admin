import { selectOptionData } from "@constants/selectOptionData";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
];

export default function Table() {
  return (
    <TableContainer component={Paper} sx={{ overflow: "visible" }}>
      <TableHead>
        <TableRow>
          {selectOptionData.map(option => (
            <TableCell
              align="center"
              sx={{ fontSize: "12px", fontWeight: "500", whiteSpace: "pre-wrap" }}
            >
              {option.name}
            </TableCell>
          ))}
          <TableCell align="center" sx={{ fontSize: "12px", whiteSpace: "pre-line" }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            {Object.values(row).map((value, index) => (
              <TableCell key={index} sx={{ fontSize: "12px", textAlign: "center" }}>
                {value}
              </TableCell>
            ))}
            <TableCell sx={{ padding: "0px" }}>
              <div style={{ display: "flex", gap: 5 }}>
                <Button variant="outlined">수정</Button>
                <Button variant="outlined" color="error">
                  탈퇴
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}
