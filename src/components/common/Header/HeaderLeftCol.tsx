import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import { useStore } from "zustand";
import { HeaderProps } from ".";
import {
  allMemberTableTitle,
  paymentStatusTableTitle,
  pendingMemberTableTitle,
} from "@/constants/table";
import { allMembersStore } from "@/store/allMembers";
import { grantableMembersStore } from "@/store/grantableMembers";
import { grantedMembersStore } from "@/store/grantedMembers";
import { ManagementVariant } from "@/types/entities/member";
import { SearchVariantType } from "@/types/entities/store";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps<T extends ManagementVariant> = {
  variant: ManagementVariant;
} & Pick<
  HeaderProps<T>,
  | "setPendingMemberSearchType"
  | "setPendingMemberSearchText"
  | "setPaymentStatusMemberSearchType"
  | "setPaymentStatusMemberSearchText"
>;

const HeaderLeftElement = (
  variant: ManagementVariant,
  setPendingMemberSearchType?: Dispatch<SetStateAction<string>>,
  setPaymentStatusMemberSearchType?: Dispatch<SetStateAction<string>>,
) => {
  const [selectedValue, setSelectedValue] = useState("");

  const { setSearchVariant: setAllMemberSearchVariant } = useStore(allMembersStore);
  const { setSearchVariant: setGrantedMemberSearchVariant } = useStore(grantedMembersStore);
  const { setSearchVariant: setGrantableMemberSearchVariant } = useStore(grantableMembersStore);

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    if (variant === "allMember") {
      setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
      setAllMemberSearchVariant?.(
        allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"allMember">,
      );
    } else if (variant === "pendingMember") {
      setSelectedValue(pendingMemberTableTitle[targetIndex]["value"]);
      setPendingMemberSearchType?.(pendingMemberTableTitle.slice(0, 5)[targetIndex]["type"]);
    } else if (variant === "paymentStatus") {
      setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
      setPaymentStatusMemberSearchType?.(paymentStatusTableTitle.slice(0, 5)[targetIndex]["type"]);
    } else if (variant === "grantableMember") {
      setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
      setGrantableMemberSearchVariant?.(
        allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantableMember">,
      );
    } else {
      setSelectedValue(allMemberTableTitle[targetIndex]["value"]);
      setGrantedMemberSearchVariant?.(
        allMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantedMember">,
      );
    }
  };

  return {
    allMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {allMemberTableTitle.map(title => (
            <MenuItem value={title.value} key={title.value}>
              {title.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
    pendingMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {pendingMemberTableTitle.slice(0, 5).map(title => (
            <MenuItem value={title.value} key={title.value}>
              {title.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
    grantableMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {allMemberTableTitle.map(title => (
            <MenuItem value={title.value} key={title.value}>
              {title.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
    grantedMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {allMemberTableTitle.map(title => (
            <MenuItem value={title.value} key={title.value}>
              {title.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
    paymentStatus: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {pendingMemberTableTitle.slice(0, 5).map(option => (
            <MenuItem value={option.value} key={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormContainer>
    ),
  };
};

export default function HeaderLeftCol<T extends ManagementVariant>({
  variant,
  setPendingMemberSearchType,
  setPendingMemberSearchText,
  setPaymentStatusMemberSearchType,
  setPaymentStatusMemberSearchText,
}: HeaderLeftColProps<T>) {
  const { setSearchText: setAllMemberSearchText } = useStore(allMembersStore);
  const { setSearchText: setGrantedMemberSearchText } = useStore(grantedMembersStore);
  const { setSearchText: setGrantableMemberSearchText } = useStore(grantableMembersStore);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (variant === "allMember") {
      setAllMemberSearchText?.(e.target.value);
    } else if (variant === "pendingMember") {
      setPendingMemberSearchText?.(e.target.value);
    } else if (variant === "paymentStatus") {
      setPaymentStatusMemberSearchText?.(e.target.value);
    } else if (variant === "grantableMember") {
      setGrantableMemberSearchText?.(e.target.value);
    } else {
      setGrantedMemberSearchText?.(e.target.value);
    }
  };

  return (
    <Container>
      {
        HeaderLeftElement(variant, setPendingMemberSearchType, setPaymentStatusMemberSearchType)[
          variant
        ]
      }
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: 200 }}
        onChange={handleChangeText}
      />
    </Container>
  );
}

const Container = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});
