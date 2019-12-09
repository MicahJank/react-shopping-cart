import React, { createContext, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage.js';

// CartContext
export const CartContext = createContext();
export const CartContextProvider = props => {
    const [cart, setCart] = useLocalStorage("cartItems", []);

	const addItem = item => {
        const itemCartId = cart.length + 1;
        setCart([...cart, {...item, itemCartId}]);
    };

    const removeItem = itemToRemove => {
        const filteredCart = cart.filter(cartItem => {
            return itemToRemove.itemCartId !== cartItem.itemCartId;
        })

        setCart(filteredCart);
    }
    
    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem }}>
            {props.children}
        </CartContext.Provider>
    );
}