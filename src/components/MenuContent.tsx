import AddRounded from "@mui/icons-material/AddRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import OptionsMenu from "./OptionsMenu";

const mainListItems = [
  { text: "Home", href: "/home", icon: <HomeRoundedIcon /> },
  { text: "Tasks", href: "/tasks", icon: <AssignmentRoundedIcon /> },
  { text: "New", href: "/add", icon: <AddRounded /> },
];

const secondaryListItems = [
  { text: "Settings", href: "/settings", icon: <SettingsRoundedIcon /> },
  { text: "About", href: "/about", icon: <InfoRoundedIcon /> },
  { text: "Licenses", href: "/licenses", icon: <LibraryBooksIcon /> },
  {
    text: "Feedback",
    href: "https://github.com/abianche/firstday/issues/new?title=Feedback:%20&labels=feedback",
    external: true,
    icon: <HelpRoundedIcon />,
  },
];

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface MenuContentProps {
  onItemClick?: () => void;
}

export default function MenuContent({
  onItemClick,
}: Readonly<MenuContentProps>) {
  const pathname = usePathname();

  return (
    <Stack direction="column" sx={{ flex: 1 }}>
      <Toolbar>
        <Typography
          variant="h4"
          noWrap
          sx={{
            userSelect: "none",
          }}
        >
          <Stack direction="row" spacing={1}>
            <span style={{ textDecoration: "underline" }}>F</span>irst
            {/* */}
            <span style={{ textDecoration: "underline" }}>D</span>ay
          </Stack>
        </Typography>
      </Toolbar>
      <Divider />
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
        <List dense>
          {mainListItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={onItemClick}
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
                onClick={onItemClick}
                component={NextLink}
                href={item.href}
                selected={item.href === pathname}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
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
          {...stringAvatar("Doc Brown")}
          sizes="small"
          alt="Doc Brown"
          // src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="h6"
            sx={{
              userSelect: "none",
            }}
          >
            Doc Brown
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Stack>
  );
}
