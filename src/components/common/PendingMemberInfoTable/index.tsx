import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import { Grid } from "@mui/material";

export default function PendingMemberInfoTable() {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      <PendingMemberInfoTableHeader />
      <PendingMemberInfoTableBody />
    </Grid>
  );
}
