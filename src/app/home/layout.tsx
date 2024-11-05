"use client";

import Header from "@/components/Header";
import AppNavbar from "@/components/AppNavbar";
import SideMenu from "@/components/SideMenu";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => {
            return {
              flexGrow: 1,
              backgroundColor: alpha(theme.palette.background.default, 1),
              overflow: "auto",
            };
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            {/* <MainGrid /> */}
            {children}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
