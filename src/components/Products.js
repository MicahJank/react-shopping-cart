import React, { useContext } from 'react';

// Contexts
import { ProductContext } from '../contexts/ProductContext.js';
import { CartContext } from '../contexts/CartContext.js';

// Components
import Product from './Product';

const Products = () => {
	const [products]  = useContext(ProductContext);
	const { addItem } = useContext(CartContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
