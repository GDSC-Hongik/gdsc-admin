// import { useState } from "react";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";
import {
  usePaymentStatusSearchInfoDispatch,
  usePaymentStatusSearchInfoState,
} from "@/hooks/contexts/usePaymentStatusSearchInfoContext";

export default function PaymentStatusInfoTable() {
  // const [] = useState(false);

  const { paginationModel } = usePaymentStatusSearchInfoState();
  const { setPaginationModel } = usePaymentStatusSearchInfoDispatch();

  return (
    <>
      <StyledDataGrid
        rows={[]}
        columns={[]}
        rowCount={0}
        paginationMode="server"
        pageSizeOptions={[5, 25, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
      />
    </>
  );
}

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
