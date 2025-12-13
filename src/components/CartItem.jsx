import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <buton onClick={onDecrease}>-</buton>
        <span>{quantity}</span>
        <buton onClick={onIncrease}>+</buton>
      </p>
    </li>
  );
}
