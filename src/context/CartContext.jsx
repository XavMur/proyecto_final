import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProcts] = useState([]);
  return (
    <CartContext.Provider value={{ cartProducts, setCartProcts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
