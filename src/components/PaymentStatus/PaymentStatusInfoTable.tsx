import { useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import PaymentDetailInfoModal from "./PaymentDetailInfoModal";
import {
  usePaymentStatusDispatchContext,
  usePaymentStatusStateContext,
} from "@/hooks/contexts/usePaymentStatusContext";
import useGetPaymentListQuery from "@/hooks/queries/useGetPaymentListQuery";
import { PaymentListType } from "@/types/entities/payment";
import { formatDateWithText } from "@/utils/validation/formatDate";

export default function PaymentStatusInfoTable() {
  const [paymentDetailInfoModalOpen, setPaymentDetailInfoModalOpen] = useState(false);

  const [selectedPaymentId, setSelectedPaymentId] = useState(0);

  const {
    paginationModel,
    searchInfo: { text: searchText, variant: searchVariant },
  } = usePaymentStatusStateContext();
  const { setPaginationModel } = usePaymentStatusDispatchContext();

  const { paymentList = [], totalElements } = useGetPaymentListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
  );

  const getFilteredPaymentList = (paymentList: PaymentListType) => {
    return paymentList.map(payment => {
      const {
        orderId,
        semester,
        memberName,
        status,
        studentId,
        nanoId,
        paymentKey,
        totalAmount,
        discountAmount,
        finalPaymentAmount,
        approvedAt,
      } = payment;

      return {
        id: orderId,
        orderId,
        semester,
        memberName,
        status: status === "PENDING" ? "대기" : status === "COMPLETED" ? "성공" : "취소",
        studentId,
        nanoId,
        paymentKey,
        totalAmount,
        discountAmount,
        finalPaymentAmount,
        approvedAt: approvedAt ? formatDateWithText(approvedAt) : "",
      };
    });
  };

  const handleClose = () => {
    setSelectedPaymentId(0);
    setPaymentDetailInfoModalOpen(false);
  };

  const handleClickDetailInfo = (paymentId: number) => {
    setSelectedPaymentId(paymentId);
    setPaymentDetailInfoModalOpen(true);
  };

  const rowCountRef = useRef(totalElements || 0);

  const rowCount = useMemo(() => {
    if (totalElements !== undefined) {
      rowCountRef.current = totalElements;
    }

    return rowCountRef.current;
  }, [totalElements]);

  return (
    <>
      <StyledDataGrid
        rows={getFilteredPaymentList(paymentList)}
        columns={getColumns(handleClickDetailInfo)}
        rowCount={rowCount}
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
      <PaymentDetailInfoModal
        open={paymentDetailInfoModalOpen}
        onClose={handleClose}
        selectedPaymentId={selectedPaymentId}
      />
    </>
  );
}

const getColumns = (handleClickDetailInfo: (paymentId: number) => void): GridColDef[] => [
  {
    field: "orderId",
    headerName: "결제번호",
    headerAlign: "left",
    minWidth: 80,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "semester",
    headerName: "활동학기",
    headerAlign: "left",
    minWidth: 75,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "memberName",
    headerName: "이름",
    headerAlign: "left",
    minWidth: 80,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "status",
    headerName: "주문상태",
    headerAlign: "left",
    minWidth: 80,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    minWidth: 90,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "nanoId",
    headerName: "주문 Nano ID",
    headerAlign: "left",
    minWidth: 200,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "paymentKey",
    headerName: "결제 키",
    headerAlign: "left",
    minWidth: 220,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "totalAmount",
    headerName: "주문 총액",
    headerAlign: "left",
    minWidth: 100,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    minWidth: 100,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "finalPaymentAmount",
    headerName: "최종결제 금액",
    headerAlign: "left",
    minWidth: 100,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "approvedAt",
    headerName: "결제 시간",
    headerAlign: "left",
    flex: 1,
    minWidth: 200,
    resizable: false,
    editable: false,
  },
  {
    field: "detailInfo",
    headerName: "",
    sortable: false,
    flex: 1,
    minWidth: 130,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper flexDirection={"row"}>
          <StyledButton
            variant="outlined"
            color="secondary"
            onClick={() => handleClickDetailInfo(params.row.id)}
          >
            상세 정보
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });

const StyledButtonWrapper = styled(Stack)({
  display: "flex",
  gap: 8,
  paddingTop: 7,
});

const StyledButton = styled(Button)({
  padding: "6px 16px",
  height: "36px",
  width: "112px",
});
