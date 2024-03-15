import { saveAs } from "file-saver";

export const downloadExcelFile = (data: string, fileName: string) => {
  const blob = new Blob([data], { type: "application/vnd.ms-excel" });
  saveAs(blob, `${fileName}.xls`);
};
