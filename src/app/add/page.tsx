"use client";

import dynamic from "next/dynamic";

const EditorNoSSR = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>New training</h1>
      <EditorNoSSR />
    </div>
  );
}
