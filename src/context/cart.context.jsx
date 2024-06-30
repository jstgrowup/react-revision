import { createContext, useReducer } from "react";
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
  cartTotal: 0,
  cartCount: 0,
});
const CART_INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};
export const CART_REDUCER_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  OPEN_CART_DROPDOWN: "OPEN_CART_DROPDOWN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_REDUCER_TYPES.OPEN_CART_DROPDOWN:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [cartItems, setcartItems] = useState([]);
  // const [cartIsOpen, setcartIsOpen] = useState(false);
  // const [cartCount, setcartCount] = useState(0);
  // const [cartTotal, setcartTotal] = useState(0);
  // useEffect(() => {
  //   const newCartCount = cartItems.reduce((total, cartitem) => {
  //     return total + cartitem.quantity;
  //   }, 0);
  //   setcartCount(newCartCount);
  // }, [cartItems]);
  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce((total, cartitem) => {
  //     return total + cartitem.quantity * cartitem.price;
  //   }, 0);
  //   setcartTotal(newCartTotal);
  // }, [cartItems]);
  const [{ cartItems, cartIsOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, CART_INITIAL_STATE);
  const updateCartItemsReducer = (newCartItems) => {
    /*
  
    dispatch new action with payload ={
    newCartItems
    newCartTotal
    newCartCount
    }
    
    */
    const newCartCount = cartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity;
    }, 0);
    const newCartTotal = cartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity * cartitem.price;
    }, 0);
    dispatch({
      type: CART_REDUCER_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };
  const setcartIsOpen = () =>
    dispatch({
      type: CART_REDUCER_TYPES.OPEN_CART_DROPDOWN,
      payload: {
        cartIsOpen: cartIsOpen ? false : true,
      },
    });
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems = clearCart(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const values = {
    cartIsOpen,
    setcartIsOpen,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    cartCount,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
