"use client";
import * as React from "react";
import { drawerClasses } from "@mui/material/Drawer";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";

import {
  styled,
  Avatar,
  Drawer as MuiDrawer,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "4px",
          p: 1.5,
        }}
      >
        First Day
      </Box>
      <Divider />
      <MenuContent />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          {...stringAvatar("Alessio Bianchetti")}
          sizes="small"
          alt="Alessio Bianchetti"
          // src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Alessio Bianchetti
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
