"use client";

import EditorLoading from "@/components/EditorLoading";
import { Box, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorNoSSR = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <EditorLoading />,
});

export default function Home() {
  const [title, setTitle] = useState("");

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
      }}
    >
      <TextField
        value={title}
        required
        fullWidth
        id="standard-basic"
        label="Title"
        variant="standard"
        size="medium"
        margin="normal"
        autoFocus
        autoComplete="off"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
      />
      <EditorNoSSR />
    </Box>
  );
}
