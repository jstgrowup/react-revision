import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToremove) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id !== cartItemToremove.id
  );

  if (foundCartItem.quantity == 1) {
    return cartItems.filter((cartitem) => cartitem.id !== cartItemToremove.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
const clearCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartitem) => cartitem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  cartIsOpen: false,
  setcartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [cartCount, setcartCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setcartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove) => {
    setcartItems(clearCart(cartItems, cartItemToRemove));
  };
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity;
    }, 0);
    setcartCount(newCartTotal);
  }, [cartItems]);

  const values = {
    cartIsOpen,
    setcartIsOpen,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    cartCount,
    clearItemFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
