import { useState, ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { memberInfoSelectMenu } from "@/constants/table";
import {
  useCouponProvisionSearchInfoDispatch,
  useCouponProvisionSearchInfoState,
} from "@/hooks/contexts/useCouponProvisionSearchInfoContext";

export default function CouponProvisionMembersHeader() {
  const [selectedMemberInfoVariant, setSelectedMemberInfoVariant] = useState<number>(1);

  const { setSearchText, setSearchVariant, setPaginationModel } =
    useCouponProvisionSearchInfoDispatch();
  const { searchText } = useCouponProvisionSearchInfoState();

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectMemberInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchVariant?.(memberInfoSelectMenu[targetIndex]["type"]);
    setSearchText?.("");
    setSelectedMemberInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.length === 1 && handleResetPage();

    setSearchText?.(text);
  };

  return (
    <StyledHeaderWrapper>
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
        value={searchText}
        onChange={handleChangeText}
      />
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  flexWrap: "wrap",
  padding: "16px",
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});
