import { createContext, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: false,
  setcartIsOpen: () => {},
});
export const CartProvider = ({ children }) => {
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const values = { cartIsOpen, setcartIsOpen };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
