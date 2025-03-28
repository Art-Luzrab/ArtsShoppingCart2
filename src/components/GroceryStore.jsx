import React from "react";
import { useState } from "react";

import Grocery from "./Grocery";
import { market } from "../data/market";

export default function GroceryStore() {
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
      <div className="market-container">
        <h1>Welcome To Arthur's Market</h1>
        <div className="market">
          <ul className="ul-groceries">{groceries}</ul>
        </div>
      </div>
    </>
  );
}
