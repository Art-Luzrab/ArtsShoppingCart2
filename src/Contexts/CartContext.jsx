import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case "addToCart":
        const existingGrocery = state.find(
          (grocery) => grocery.id === action.payload.id
        );
        console.log(state);
        console.log("payload", action.payload.amountOrdered);
        console.log("existingGrocery", existingGrocery);

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
        } else return [...state, action.payload];

      case "deleteFromCart":
        return state.filter((grocery) => grocery.id !== action.payload.id);

      default:
        return state;
    }
  }

  const [cart, dispatch] = useReducer(reducer, initialState);

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
