"use client";

import EditorLoading from "@/components/EditorLoading";
import useExtensions from "@/hooks/useExtensions";
import { selectContent, setContent } from "@/store/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, TextField, Typography } from "@mui/material";
import { RichTextEditorRef, RichTextReadOnly } from "mui-tiptap";
import dynamic from "next/dynamic";
import * as R from "ramda";
import { Fragment, useEffect, useRef, useState } from "react";

const EditorNoSSR = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <EditorLoading />,
});

export default function Home() {
  const dispatch = useAppDispatch();
  const editorContent = useAppSelector(selectContent);
  const [title, setTitle] = useState("");
  const rteRef = useRef<RichTextEditorRef>(null);
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });

  useEffect(() => {
    // reset rte content
    dispatch(setContent(""));
  }, [dispatch]);

  return (
    <Fragment>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: "10px",
          right: "20px",
          zIndex: 1200,
        }}
        onClick={() => {
          const rteContent = rteRef.current?.editor?.getHTML() ?? "";
          console.log(rteContent);
          dispatch(setContent(rteContent));
        }}
      >
        Save
      </Button>

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
        <Box mt={3} hidden={R.isEmpty(editorContent)}>
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
    </Fragment>
  );
}
