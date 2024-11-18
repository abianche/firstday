import { Box, Button } from "@mui/material";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box width="100%">
      <h1>Welcome to Home</h1>
      <Button
        variant="contained"
        LinkComponent={NextLink}
        href="/home/trainings"
      >
        Tranings
      </Button>
    </Box>
  );
}
