import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

import App from "./App.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
