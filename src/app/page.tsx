"use client";

import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to FirstDay</h1>
      <Editor
        style={{ height: "200px", marginBottom: "1rem" }}
        value={content}
        onTextChange={(e) => setContent(e.htmlValue ?? "")}
      />
      <Button label="Submit" icon="pi pi-check" />
    </div>
  );
}
