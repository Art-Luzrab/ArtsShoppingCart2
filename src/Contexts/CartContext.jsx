import { createContext, useContext, useEffect, useReducer } from "react";
import { useGrocery } from "./GroceryContext";

const CartContext = createContext();

function CartProvider({ children }) {
  const { newGroceries, setNewGroceries } = useGrocery();

  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case "addToCart":
        const existingGrocery = state.find(
          (grocery) => grocery.id === action.payload.id
        );

        if (existingGrocery) {
          return state.map((grocery) =>
            grocery.id === action.payload.id
              ? {
                  ...grocery,
                  amountOrdered:
                    grocery.amountOrdered + action.payload.amountOrdered,
                }
              : grocery
          );
        } else {
          return [...state, action.payload];
        }

      case "deleteFromCart":
        return state.filter((grocery) => grocery.id !== action.payload.id);

      default:
        return state;
    }
  }

  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    cart.forEach((item) => {
      setNewGroceries((previousGroceries) =>
        previousGroceries.map((grocery) =>
          grocery.id === item.id
            ? { ...grocery, inventory: grocery.inventory - item.amountOrdered }
            : grocery
        )
      );
    });
  }, [cart, setNewGroceries]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider.");
  return context;
}

export { CartProvider, useCart };
