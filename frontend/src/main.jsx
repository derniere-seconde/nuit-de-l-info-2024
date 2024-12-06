import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
