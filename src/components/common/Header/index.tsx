import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
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
import { memberInfoSelectMenu, memberTypeSelectMenu } from "@/constants/table";
import { ManagementVariant } from "@/types/entities/member";
import { downloadExcelFile } from "@/utils/excel";
import {
  usePendingMembersSearchInfoDispatch,
  usePendingMembersSearchInfoState,
} from "@/hooks/contexts/usePendingMemberSearchInfoContext";
import { SearchVariantType } from "@/types/entities/search";

export type HeaderProps = {
  variant: ManagementVariant;
  setAllMemberSearchText: Dispatch<SetStateAction<string>>;
  setAllMemberSearchVariant: Dispatch<SetStateAction<SearchVariantType<"allMember">>>;
  allMemberSearchText: string;
};

export default function Header({
  variant,
  setAllMemberSearchText,
  setAllMemberSearchVariant,
  allMemberSearchText,
}: HeaderProps) {
  const [selectedMemberInfoVariant, setSelectedMemberInfoVariant] = useState<number>(1);
  const [selectedMemberVariant, setSelectedMemberVariant] = useState<number>(1);

  const {
    setSearchText: setPendingMemberSearchText,
    setSearchVariant: setPendingMemberSearchVariant,
    setMemberVariant: setPendingMemberVariant,
  } = usePendingMembersSearchInfoDispatch();
  const { searchText: pendingMemberSearchText } = usePendingMembersSearchInfoState();

  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      downloadExcelFile(data, "members");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  };

  const handleChangeSelectMemberInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;
    if (variant === "allMember") {
      setAllMemberSearchVariant?.(memberInfoSelectMenu[targetIndex]["type"]);
      setSelectedMemberInfoVariant(targetIndex + 1);
      setAllMemberSearchText?.("");
    } else if (variant === "pendingMember") {
      setPendingMemberSearchVariant?.(memberInfoSelectMenu[targetIndex]["type"]);
      setSelectedMemberInfoVariant(targetIndex + 1);
      setPendingMemberSearchText?.("");
    }
  };

  const handleChangeSelectMemberVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setPendingMemberVariant?.(memberTypeSelectMenu[targetIndex]["type"]);
    setSelectedMemberVariant(targetIndex + 1);
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (variant === "allMember") {
      setAllMemberSearchText?.(e.target.value);
    } else if (variant === "pendingMember") {
      setPendingMemberSearchText?.(e.target.value);
    }
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
            {memberInfoSelectMenu.map(title => (
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
          value={variant === "allMember" ? allMemberSearchText : pendingMemberSearchText}
          onChange={handleChangeText}
        />
      </StyledHeaderLeftColWrapper>
      <StyledHeaderRightColWrapper>
        {variant === "allMember" && (
          <StyledExcelDownloadButton variant="outlined" onClick={handleClickExcelDownloadButton}>
            엑셀 다운로드
          </StyledExcelDownloadButton>
        )}
        {variant === "pendingMember" && (
          <StyledFormWrapper>
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              value={selectedMemberVariant}
              onChange={handleChangeSelectMemberVariant}
            >
              {memberTypeSelectMenu.map(title => (
                <MenuItem value={title.value} key={title.value}>
                  {title.name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormWrapper>
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

const StyledHeaderRightColWrapper = styled(Stack)({
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
  height: "32px",
});
