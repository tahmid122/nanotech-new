import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import LangContextProvider from "./contexts/LangContext/LangContextProvider";
import CartContextProvider from "./contexts/CartContext/CartContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <LangContextProvider>
        <RouterProvider router={router} />
      </LangContextProvider>
    </CartContextProvider>
  </StrictMode>
);
