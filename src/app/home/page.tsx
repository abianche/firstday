import { Button } from "@mui/material";
import NextLink from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Home</h1>
      <Button
        variant="contained"
        LinkComponent={NextLink}
        href="/home/trainings"
      >
        Tranings
      </Button>
    </div>
  );
}
