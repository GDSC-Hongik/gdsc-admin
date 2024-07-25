import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import {
  usePaymentStatusDispatchContext,
  usePaymentStatusStateContext,
} from "@/hooks/contexts/usePaymentStatusContext";
import { PaymentListType } from "@/types/entities/payment";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";

const mockData: PaymentListType = [
  {
    orderId: 1,
    semester: "2024-1",
    memberName: "홍서현",
    status: "PENDING",
    studentId: "C111206",
    nanoId: "nsodisfnsoin4i3on3",
    paymentKey: "nsodisfnsoin4i3on3",
    totalAmount: "20000",
    discountAmount: "5000",
    finalPaymentAmount: "15000",
    approvedAt: "2024-07-25T10:28:46.366Z",
  },
];

export default function PaymentStatusInfoTable() {
  const { paginationModel } = usePaymentStatusStateContext();
  const { setPaginationModel } = usePaymentStatusDispatchContext();

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
        totalAmount: formatPrice(totalAmount),
        discountAmount: formatPrice(discountAmount),
        finalPaymentAmount: formatPrice(finalPaymentAmount),
        approvedAt: formatDateWithText(approvedAt),
      };
    });
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredPaymentList(mockData)}
        columns={columns}
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

const columns: GridColDef[] = [
  {
    field: "orderId",
    headerName: "결제번호",
    headerAlign: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "semester",
    headerName: "활동학기",
    headerAlign: "left",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "memberName",
    headerName: "이름",
    headerAlign: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "status",
    headerName: "결제상태",
    headerAlign: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "nanoId",
    headerName: "주문 Nano ID",
    headerAlign: "left",
    width: 150,
    resizable: false,
    editable: false,
  },
  {
    field: "paymentKey",
    headerName: "결제 키",
    headerAlign: "left",
    width: 150,
    resizable: false,
    editable: false,
  },
  {
    field: "totalAmount",
    headerName: "주문 총액",
    headerAlign: "left",
    width: 100,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    width: 100,
    resizable: false,
    editable: false,
  },
  {
    field: "finalPaymentAmount",
    headerName: "최종결제 금액",
    headerAlign: "left",
    width: 100,
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
          <StyledButton variant="outlined" color="secondary" onClick={() => {}}>
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
