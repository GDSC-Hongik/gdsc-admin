import { useState, ChangeEvent } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  styled,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import { memberInfoSelectMenu } from "@/constants/table";
import {
  useAllMembersSearchInfoDispatch,
  useAllMembersSearchInfoState,
} from "@/hooks/contexts/useAllMembersContext";
import { downloadExcelFile } from "@/utils/excel";

export default function AllMembersHeader() {
  const [selectedMemberInfoVariant, setSelectedMemberInfoVariant] = useState(1);

  const { setSearchInfo, setPaginationModel } = useAllMembersSearchInfoDispatch();
  const {
    searchInfo: { text: searchText },
  } = useAllMembersSearchInfoState();

  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      downloadExcelFile(data, "members");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  };

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectMemberInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevInfo => ({
      ...prevInfo,
      variant: memberInfoSelectMenu[targetIndex]["type"],
      text: "",
    }));
    setSelectedMemberInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.length === 1 && handleResetPage();

    setSearchInfo(prevInfo => ({
      ...prevInfo,
      text: text,
    }));
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={selectedMemberInfoVariant}
            onChange={handleChangeSelectMemberInfoVariant}
          >
            {memberInfoSelectMenu.map(menu => (
              <MenuItem value={menu.value} key={menu.value}>
                {menu.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormWrapper>
        <StyledTextField
          label="search"
          variant="outlined"
          placeholder="name, email, etc.."
          value={searchText}
          onChange={handleChangeText}
        />
      </StyledHeaderLeftColWrapper>
      <StyledHeaderRightColWrapper>
        <StyledExcelDownloadButton variant="outlined" onClick={handleClickExcelDownloadButton}>
          엑셀 다운로드
        </StyledExcelDownloadButton>
      </StyledHeaderRightColWrapper>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled("header")({
  gap: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledHeaderLeftColWrapper = styled(Box)({
  display: "flex",
  gap: 20,
  alignItems: "center",
  flexWrap: "wrap",
  width: "fit-content",
});

const StyledHeaderRightColWrapper = styled(Box)({
  justifyContent: "space-between",
});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});

const StyledExcelDownloadButton = styled(Button)({
  padding: "8px 22px",
  width: "134px",
  height: "32px",
});
