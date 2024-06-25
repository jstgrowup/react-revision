import React, { useContext } from "react";
import Button from "../button/button.component.jsx";
import "./cart-dropdown.component.scss";
import { CartContext } from "../../context/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem cartItem={item} key={item?.id} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
