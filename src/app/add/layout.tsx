"use client";

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { Box, Stack } from "@mui/material";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            mx: 3,
            pb: 5,
            mt: 0,
          }}
        >
          <Header />
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
