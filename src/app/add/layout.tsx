import AppNavbar from "@/components/AppNavbar";
import SideMenu from "@/components/SideMenu";
import { Box, Stack } from "@mui/material";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppNavbar />
      <SideMenu />
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Stack
          spacing={1}
          sx={{
            mx: 3,
            pb: 3,
          }}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
