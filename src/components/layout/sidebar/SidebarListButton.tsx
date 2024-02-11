import StarIcon from "@assets/star.svg?react";
import NavigateButton from "@components/layout/sidebar/NavigateButton";
import PageListToggleButton, {
  NavigatePage,
} from "@components/layout/sidebar/PageListToggleButton";
import { Box, Stack, styled } from "@mui/material";

type SidebarListButtonProps = {
  label: string;
  path?: string;
  pageList?: NavigatePage[];
} & ({ path: string } | { pageList: NavigatePage[] });

export default function SidebarListButton({ label, path, pageList }: SidebarListButtonProps) {
  const title = () => (
    <TitleContainer>
      <StarIcon />
      <Box sx={{ fontSize: "16px", fontWeight: "400", marginLeft: "12px" }}>{label}</Box>
    </TitleContainer>
  );

  return (
    <Stack>
      {path ? (
        <NavigateButton path={path}>{title()}</NavigateButton>
      ) : (
        <PageListToggleButton pageList={pageList!}>{title()}</PageListToggleButton>
      )}
    </Stack>
  );
}

const TitleContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "5px",
  color: "black",
});
