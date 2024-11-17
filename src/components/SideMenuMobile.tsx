import * as React from "react";
import { drawerClasses } from "@mui/material/Drawer";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import OptionsMenu from "./OptionsMenu";

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
}

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function SideMenuMobile({
  open,
  toggleDrawer,
}: SideMenuMobileProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: "70dvw",
          height: "100%",
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: "center", flexGrow: 1, p: 1 }}
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
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
      </Stack>
    </Drawer>
  );
}
