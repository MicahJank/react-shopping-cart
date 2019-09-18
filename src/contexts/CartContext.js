import React, { createContext, useState } from 'react';

// CartContext
export const CartContext = createContext();
export const CartContextProvider = props => {
    const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
    };
    
    return (
        <CartContext.Provider value={{ cart, setCart, addItem }}>
            {props.children}
        </CartContext.Provider>
    );
}