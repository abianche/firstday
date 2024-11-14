"use client";

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { Box, Button, Stack } from "@mui/material";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
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
          <Stack
            direction="row"
            useFlexGap
            spacing={2}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Header />
            <Button variant="contained" sx={{ mt: 2 }}>
              Save
            </Button>
          </Stack>
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
