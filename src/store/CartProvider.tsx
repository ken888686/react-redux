import React, { ReactNode } from 'react';
import CartContext from './cart-context';

type CartProviderProps = {
  children: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartProvider;
