import { createContext, useState, useEffect } from "react";
export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
