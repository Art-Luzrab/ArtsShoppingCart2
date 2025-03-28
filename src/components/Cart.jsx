import { useCart } from "../Contexts/CartContext";

export default function Cart() {
  return (
    <>
      <div className="cart-container">
        <div className="word-separator item-price">
          <p>Item</p> <p>Price</p>
        </div>
        <ul className="ul-cart-items">
          <li className="word-separator cart-item">
            <p>amount here</p>
            <p>Emoji</p>
            <button>❌</button>
          </li>
        </ul>

        <div className="total">
          <div className="word-separator">
            <p>Subtotal:</p> <p>x</p>
          </div>
          <div className="word-separator">
            <p>Tax:</p> <p>x</p>
          </div>
          <div className="word-separator">
            <p>Total:</p> <p>x</p>
          </div>
        </div>
      </div>
    </>
  );
}
