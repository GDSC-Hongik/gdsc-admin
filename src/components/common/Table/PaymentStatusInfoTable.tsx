import {
  usePaymentStatusSearchInfoDispatch,
  usePaymentStatusSearchInfoState,
} from "@/hooks/contexts/usePaymentStatusSearchInfoContext";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import DetailInfoModal from "../Modal/DetailInfoModal";

export default function PaymentStatusInfoTable() {
  const [detailInfoModalOpen] = useState(false);

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
      {detailInfoModalOpen && <DetailInfoModal />}
    </>
  );
}

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
