import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import LangContextProvider from "./contexts/LangContext/LangContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangContextProvider>
      <RouterProvider router={router} />
    </LangContextProvider>
  </StrictMode>
);
