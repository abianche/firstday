import Button from "@mui/material/Button";
import RocketIcon from "@mui/icons-material/Rocket";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Home</h1>
      <Button variant="contained" endIcon={<RocketIcon />}>
        Send
      </Button>
    </div>
  );
}
