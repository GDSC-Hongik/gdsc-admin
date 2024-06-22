import { useState, ChangeEvent } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { allMemberApi } from "@/apis/allMemberApi";
import { commonMemberTableTitle, pendingMemberTableTitle } from "@/constants/table";
import {
  useAllMembersSearchInfoDispatch,
  useAllMembersSearchInfoState,
} from "@/hooks/contexts/useAllMemberSearchInfoContext";
import { ManagementVariant } from "@/types/entities/member";
import { downloadExcelFile } from "@/utils/excel";

export type HeaderProps = {
  variant: ManagementVariant;
};

export default function Header({ variant }: HeaderProps) {
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const { setSearchText, setSearchVariant } = useAllMembersSearchInfoDispatch();
  const { searchText } = useAllMembersSearchInfoState();

  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      downloadExcelFile(data, "members");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  };

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;
    if (variant === "allMember") {
      setSearchVariant?.(commonMemberTableTitle[targetIndex]["type"]);
      setSelectedValue(targetIndex + 1);
      setSearchText?.("");
    }
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (variant === "allMember") {
      setSearchText?.(e.target.value);
    }
  };

  const getSelectMenuList = (variant: ManagementVariant) => {
    if (variant === "allMember") {
      return commonMemberTableTitle;
    } else {
      return pendingMemberTableTitle.slice(0, 5);
    }
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select label="Type" value={selectedValue} onChange={handleChangeMemberSelect}>
            {getSelectMenuList(variant).map(title => (
              <MenuItem value={title.value} key={title.value}>
                {title.name}
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
        {variant === "allMember" && (
          <StyledExcelDownloadButton variant="outlined" onClick={handleClickExcelDownloadButton}>
            엑셀 다운로드
          </StyledExcelDownloadButton>
        )}
      </StyledHeaderRightColWrapper>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledHeaderLeftColWrapper = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const StyledHeaderRightColWrapper = styled(Stack)({});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});

const StyledExcelDownloadButton = styled(Button)({
  marginRight: "20px",
});
