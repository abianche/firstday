"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Toolbar as MuiToolbar,
  Stack,
  styled,
  tabsClasses,
} from "@mui/material";
import * as React from "react";
import BackButton from "./BackButton";
import MenuButton from "./MenuButton";
import SideMenuMobile from "./SideMenuMobile";

const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "12px",
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: "8px",
    p: "8px",
    pb: 0,
  },
});

export default function AppNavbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "auto", md: "none" },
        backgroundImage: "none",
      }}
    >
      <Toolbar variant="dense">
        <Stack
          direction="row"
          sx={{
            flexGrow: 1,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <BackButton />
          <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>
          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
