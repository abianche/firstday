"use client";

import {
  dividerClasses,
  listClasses,
  Menu,
  MenuItem as MuiMenuItem,
  paperClasses,
  Skeleton,
  styled,
  useColorScheme,
} from "@mui/material";
import * as React from "react";

const MenuItem = styled(MuiMenuItem)({
  margin: "2px 0",
});

export default function MenuItemThemeSelector() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  const handleMode = (
    event: React.MouseEvent<HTMLLIElement>,
    targetMode: "system" | "light" | "dark"
  ) => {
    setMode(targetMode);
    handleClose(event);
  };

  if (!mode) {
    return <Skeleton variant="rectangular" width={"100%"} height={34} />;
  }

  return (
    <>
      <MenuItem
        onClick={handleClick}
        disableRipple
        aria-controls={open ? "color-scheme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Theme
      </MenuItem>
      <Menu
        anchorEl={anchorEl}
        id="theme-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: "4px",
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: "4px -4px",
          },
        }}
      >
        <MenuItem
          selected={mode === "system"}
          onClick={(e) => handleMode(e, "system")}
        >
          System
        </MenuItem>
        <MenuItem
          selected={mode === "light"}
          onClick={(e) => handleMode(e, "light")}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={mode === "dark"}
          onClick={(e) => handleMode(e, "dark")}
        >
          Dark
        </MenuItem>
      </Menu>
    </>
  );
}
