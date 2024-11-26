import { Box } from "@mui/material";
import Image from "next/image";

export default function Logo() {
  return (
    <Box
      sx={{
        width: 96,
        height: 96,
        mx: "auto",
        borderRadius: "50%",
        overflow: "hidden",
        mb: 5,
      }}
    >
      <Image
        src="/favicon-96x96.png"
        width={96}
        height={96}
        alt="Logo"
        quality={100}
      />
    </Box>
  );
}
