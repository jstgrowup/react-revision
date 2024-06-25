import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
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
  const [cartItems, setcartItems] = useState([]);
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [cartCount, setcartCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity;
    }, 0);
    setcartCount(newCartTotal);
  }, [cartItems]);

  const values = { cartIsOpen, setcartIsOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
