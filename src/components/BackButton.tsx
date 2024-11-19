"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <IconButton size="small" aria-label="back" onClick={handleBack}>
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}
