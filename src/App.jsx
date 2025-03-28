import React, { useReducer } from "react";
import Cart from "./components/Cart";

import GroceryStore from "./components/GroceryStore";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
  }
}

function App() {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <GroceryStore />
      <Cart />
    </div>
  );
}

export default App;
