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
import { allMemberApi } from "@/apis/allMemberApi";
import { memberInfoSelectMenu } from "@/constants/member";
import {
  useAllMembersDispatchContext,
  useAllMembersStateContext,
} from "@/hooks/contexts/useAllMembersContext";
import { downloadExcelFile } from "@/utils/excel";

export default function AllMembersHeader() {
  const [selectedSearchInfoVariant, setSelectedSearchInfoVariant] = useState(1);

  const { setSearchInfo, setPaginationModel } = useAllMembersDispatchContext();
  const {
    searchInfo: { text: searchText },
  } = useAllMembersStateContext();

  const handleClickExcelDownloadButton = async () => {
    const data = await allMemberApi.getMemberInfoExcel();
    downloadExcelFile(data, "members");
  };

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectSearchInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevInfo => ({
      ...prevInfo,
      variant: memberInfoSelectMenu[targetIndex]["type"],
      text: "",
    }));
    setSelectedSearchInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length === 1) {
      handleResetPage();
    }

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
            value={selectedSearchInfoVariant}
            onChange={handleChangeSelectSearchInfoVariant}
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
  width: "fit-content",
  height: "32px",
});
