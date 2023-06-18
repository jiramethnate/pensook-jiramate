import "./CheckoutItem.css";
import { Link } from "react-router-dom";

const CheckoutItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="checkoutitem">
      <div className="checkoutitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="checkoutitem__name">
        <p>{item.name}</p>
      </Link>
      <p className="checkoutitem__price">{item.price} x {item.qty} = <b>{item.price * item.qty } ฿</b></p>
      {/* <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="checkoutitem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="checkoutitem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button> */}
    </div>
  );
};

export default CheckoutItem;
