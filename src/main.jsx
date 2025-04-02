import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

import App from "./App.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { GroceryProvider } from "./Contexts/GroceryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GroceryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </GroceryProvider>
  </StrictMode>
);
