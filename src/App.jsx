import React from "react";
import Cart from "./components/Cart";

import GroceryStore from "./components/GroceryStore";

function App() {
  return (
    <div className="App">
      <GroceryStore />
      <Cart />
    </div>
  );
}

export default App;
