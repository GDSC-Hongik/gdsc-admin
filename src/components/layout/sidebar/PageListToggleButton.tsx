import { useState } from "react";
import { MenuItem, MenuItemProps, styled } from "@mui/material";
import ToggleIcon from "@/assets/toggle.svg?react";
import NavigateButton from "@/components/layout/sidebar/NavigateButton";

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
          <NavigateButton key={label} path={path}>
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
