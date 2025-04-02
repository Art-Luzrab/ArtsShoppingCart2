import { createContext, useContext, useState } from "react";
import Grocery from "../components/Grocery";
import market from "../data/market";

const GroceryContext = createContext();

function GroceryProvider({ children }) {
  const [newGroceries, setNewGroceries] = useState(
    market
      .map((grocery) => ({
        ...grocery,
        inventory: Math.floor(Math.random() * 101),
      }))
      .map((grocery) =>
        grocery.inventory === 0 ? { ...grocery, inStock: false } : grocery
      )
  );

  return (
    <>
      <GroceryContext.Provider value={{ newGroceries }}>
        {children}
      </GroceryContext.Provider>
    </>
  );
}

function useGrocery() {
  const context = useContext(GroceryContext);
  if (context === undefined)
    throw new Error("GroceryContext was used outside the GroceryProvider.");
  return context;
}

export { useGrocery, GroceryProvider };
