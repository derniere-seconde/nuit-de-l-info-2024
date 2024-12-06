import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";

const navigate = useNavigate();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider navigate={navigate}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>,
);
