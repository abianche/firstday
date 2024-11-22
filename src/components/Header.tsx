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
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
    </Stack>
  );
}
