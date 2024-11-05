"use client";;
import Header from "@/components/Header";
import AppNavbar from "@/components/AppNavbar";
import SideMenu from "@/components/SideMenu";
import { Box, Stack, alpha } from '@mui/material';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
