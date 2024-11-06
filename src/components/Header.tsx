"use client";

import ColorModeIconDropdown from "@/theme/ColorModeIconDropdown";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
