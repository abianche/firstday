"use client";

import EditorLoading from "@/components/EditorLoading";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const EditorNoSSR = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <EditorLoading />,
});

export default function Home() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
      }}
    >
      <h1>New training</h1>
      <EditorNoSSR />
    </Box>
  );
}
