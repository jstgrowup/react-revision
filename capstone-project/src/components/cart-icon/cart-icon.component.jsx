import React from "react";

import "./cart-icon.styles.scss";
import { FaCartShopping } from "react-icons/fa6";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <span className="item-count">0</span>
      <FaCartShopping className="shopping-icon" />
    </div>
  );
};

export default CartIcon;
