"use client";

import { Stack } from "@mui/material";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";

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
    </Stack>
  );
}
