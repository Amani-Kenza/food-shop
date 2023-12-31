import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});

  const addToCart = useCallback((productId, quantityToAdd) => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + quantityToAdd,
    }));
    setCartItemsCount(prevCount => prevCount + quantityToAdd);
  }, []);

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart, productQuantities }}>
      {children}
    </CartContext.Provider>
  );
};
