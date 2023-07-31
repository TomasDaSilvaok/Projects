import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <span className="total-amount">{amount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
