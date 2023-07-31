import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <h2>Your Bag</h2>
        <p className="empty-cart">is currently empty</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your bag</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
