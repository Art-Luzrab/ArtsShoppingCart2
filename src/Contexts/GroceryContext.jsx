import { createContext, useContext } from "react";
import Grocery from "../components/Grocery";

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
  const groceries = newGroceries.map((grocery) => (
    <Grocery
      id={grocery.id}
      name={grocery.name}
      price={grocery.price}
      category={grocery.category}
      inStock={grocery.inStock}
      photo={grocery.photo}
      key={grocery.id}
      amountOrdered={grocery.amountOrdered}
      inventory={grocery.inventory}
      emoji={grocery.emoji}
    />
  ));

  return (
    <>
      <GroceryContext.Provider value={groceries}>
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
