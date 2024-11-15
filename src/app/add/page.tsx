"use client";

import EditorLoading from "@/components/EditorLoading";
import Header from "@/components/Header";
import useExtensions from "@/hooks/useExtensions";
import { selectContent, setContent } from "@/store/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { RichTextEditorRef, RichTextReadOnly } from "mui-tiptap";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const EditorNoSSR = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <EditorLoading />,
});

export default function Home() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const editorContent = useAppSelector(selectContent);

  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <>
      <Stack
        direction="row"
        useFlexGap
        spacing={2}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Header />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            const rteContent = rteRef.current?.editor?.getHTML() ?? "";
            console.log(rteContent);
            dispatch(setContent(rteContent));
          }}
        >
          Save
        </Button>
      </Stack>

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
        <EditorNoSSR rteRef={rteRef} />
        <Box mt={3}>
          <Typography variant="overline" sx={{ mb: 2 }}>
            Read-only saved snapshot:
          </Typography>

          <RichTextReadOnly
            immediatelyRender={false}
            content={editorContent}
            extensions={extensions}
          />
        </Box>
      </Box>
    </>
  );
}
