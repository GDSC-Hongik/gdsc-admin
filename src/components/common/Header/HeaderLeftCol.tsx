import { ChangeEvent, useState } from "react";
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
import { StoreApi, UseBoundStore, useStore } from "zustand";
import {
  commonMemberTableTitle,
  paymentStatusTableTitle,
  pendingMemberTableTitle,
} from "@/constants/table";
import { allMembersStore } from "@/store/allMembers";
import { grantableMembersStore } from "@/store/grantableMembers";
import { grantedMembersStore } from "@/store/grantedMembers";
import { paymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { pendingMembersStore } from "@/store/pendingMembers";
import { ManagementVariant } from "@/types/entities/member";
import { MemberStoreType, SearchVariantType } from "@/types/entities/store";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

const HeaderLeftElement = (variant: ManagementVariant) => {
  const [selectedValue, setSelectedValue] = useState("");

  const { setSearchVariant: setAllMemberSearchVariant } = useStore(allMembersStore);
  const { setSearchVariant: setGrantedMemberSearchVariant } = useStore(grantedMembersStore);
  const { setSearchVariant: setGrantableMemberSearchVariant } = useStore(grantableMembersStore);
  const { setSearchVariant: setPendingMemberSearchVariant } = useStore(pendingMembersStore);
  const { setSearchVariant: setPaymentMemberSearchVariant } = useStore(paymentStatusMembersStore);

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    if (variant === "allMember") {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setAllMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"allMember">,
      );
    } else if (variant === "pendingMember") {
      setSelectedValue(pendingMemberTableTitle[targetIndex]["value"]);
      setPendingMemberSearchVariant?.(
        pendingMemberTableTitle.slice(0, 5)[targetIndex][
          "type"
        ] as SearchVariantType<"pendingMember">,
      );
    } else if (variant === "paymentStatus") {
      setSelectedValue(paymentStatusTableTitle[targetIndex]["value"]);
      setPaymentMemberSearchVariant?.(
        paymentStatusTableTitle.slice(0, 5)[targetIndex][
          "type"
        ] as SearchVariantType<"paymentStatus">,
      );
    } else if (variant === "grantableMember") {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setGrantableMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantableMember">,
      );
    } else {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setGrantedMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantedMember">,
      );
    }
  };

  return {
    allMember: (
      <FormContainer>
        <InputLabel>Type</InputLabel>
        <Select value={selectedValue} onChange={handleChangeMemberSelect}>
          {commonMemberTableTitle.map(title => (
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
          {commonMemberTableTitle.map(title => (
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
          {commonMemberTableTitle.map(title => (
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

export default function HeaderLeftCol({ variant }: HeaderLeftColProps) {
  const useGetSetSearchTextFunction = (store: UseBoundStore<StoreApi<MemberStoreType>>) => {
    const { setSearchText } = useStore(store);

    return setSearchText;
  };

  const setSearchTextFunctions = {
    allMember: useGetSetSearchTextFunction(allMembersStore),
    grantedMember: useGetSetSearchTextFunction(grantedMembersStore),
    grantableMember: useGetSetSearchTextFunction(grantableMembersStore),
    pendingMember: useGetSetSearchTextFunction(pendingMembersStore),
    paymentStatus: useGetSetSearchTextFunction(paymentStatusMembersStore),
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const setSearchText = setSearchTextFunctions[variant];

    setSearchText?.(e.target.value);
  };

  return (
    <Container>
      {HeaderLeftElement(variant)[variant]}
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
