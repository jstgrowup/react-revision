import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  console.log("productToAdd:", productToAdd);
  console.log("cartItems:", cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  cartIsOpen: false,
  setcartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };
  const values = { cartIsOpen, setcartIsOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
