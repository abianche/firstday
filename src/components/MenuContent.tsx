import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AddRounded from "@mui/icons-material/AddRounded";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Home", href: "/home", icon: <HomeRoundedIcon /> },
  { text: "Tasks", href: "/tasks", icon: <AssignmentRoundedIcon /> },
  { text: "New", href: "/add", icon: <AddRounded /> },
];

const secondaryListItems = [
  { text: "Settings", href: "/settings", icon: <SettingsRoundedIcon /> },
  { text: "About", href: "/about", icon: <InfoRoundedIcon /> },
  { text: "Feedback", href: "/feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const pathname = usePathname();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={NextLink}
              href={item.href}
              selected={item.href === pathname}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={NextLink}
              href={item.href}
              selected={item.href === pathname}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
