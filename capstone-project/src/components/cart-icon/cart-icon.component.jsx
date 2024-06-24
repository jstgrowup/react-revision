import React from "react";

import "./cart-icon.styles.scss";
import { FaCartShopping } from "react-icons/fa6";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <FaCartShopping className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
