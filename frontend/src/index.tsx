import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => <h1>Welcome to FirstDay!</h1>;

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you're certain container is not null
  root.render(<App />);
}
