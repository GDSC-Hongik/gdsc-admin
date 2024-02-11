import ToggleIcon from "@assets/toggle.svg?react";
import NavigateButton from "@components/layout/sidebar/NavigateButton";
import { MenuItem, MenuItemProps, styled } from "@mui/material";
import { useState } from "react";

export type NavigatePage = { label: string; path: string };

type PageListToggleButtonProps = { pageList: NavigatePage[] } & MenuItemProps;

export default function PageListToggleButton({
  pageList,
  children,
  ...props
}: PageListToggleButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <Container onClick={toggle} {...props}>
        {children}
        <ToggleIcon
          style={{
            transform: isOpen ? `rotate(-180deg)` : "unset",
            transition: "all 0.1s linear",
          }}
        />
      </Container>
      {isOpen &&
        pageList.map(({ label, path }) => (
          <NavigateButton sx={{ paddingLeft: "45px", fontSize: "14px" }} path={path}>
            {label}
          </NavigateButton>
        ))}
    </>
  );
}

const Container = styled((props: MenuItemProps) => <MenuItem disableRipple {...props} />)({
  justifyContent: "space-between",
  borderRadius: "4px",
  padding: "13px 16px",
});