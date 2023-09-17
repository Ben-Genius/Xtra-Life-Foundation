import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{ fontFamily: "Open Sans" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
