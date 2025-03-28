import { useState } from "react";

export default function Grocery({
  id,
  name,
  price,
  category,
  inStock,
  photo,
  inventory,
  emoji,
}) {
  const [quantity, setQuantity] = useState(0);

  const grocery = {
    id,
    name,
    price,
    category,
    inStock,
    photo,
    inventory,
    emoji,
  };

  return (
    <div className="grocery">
      <img className="picture" src={photo} alt={name} />
      <p>{name}</p>
      <p>${price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
      <p>{inventory}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) =>
          e.target.value < 0 || e.target.value > grocery.inventory
            ? null
            : setQuantity(Number(e.target.value))
        }
        disabled={inStock ? false : true}
      />
      <button disabled={inStock ? false : true}>Add To Cart</button>
    </div>
  );
}
