import React from "react";

export default function GroceryStore() {
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
