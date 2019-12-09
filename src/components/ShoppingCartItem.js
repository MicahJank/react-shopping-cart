import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext.js';

const Item = props => {

	const { removeItem } = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={props.item.image} alt={`${props.item.title} book`} />


			<div>
				<h1>{props.item.title}</h1>
				<p>$ {props.item.price}</p>
				<button onClick={() => removeItem(props.item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
