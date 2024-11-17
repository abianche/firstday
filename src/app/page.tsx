import HomeIcon from "@mui/icons-material/Home";
import { Box, Button } from "@mui/material";
import NextLink from "next/link";

export default function Root() {
  return (
    <Box justifyItems={"center"} sx={{ p: 2, width: "100%", margin: "auto" }}>
      <h1>Welcome to FirstDay</h1>
      <Button
        component={NextLink}
        href="/home"
        variant="contained"
        startIcon={<HomeIcon />}
      >
        Go Home
      </Button>
    </Box>
  );
}
