"use client";

import AppNavbar from "@/components/AppNavbar";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { Box, Stack } from "@mui/material";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppNavbar />
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
          {/* <MainGrid /> */}
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
