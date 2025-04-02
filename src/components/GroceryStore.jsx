import React from "react";
import { useGrocery } from "../Contexts/GroceryContext";
import Grocery from "./Grocery";

export default function GroceryStore() {
  const { newGroceries } = useGrocery();

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
        <h1>Welcome To Arthurs Market</h1>
        <div className="market">
          <ul className="ul-groceries">{groceries}</ul>
        </div>
      </div>
    </>
  );
}
