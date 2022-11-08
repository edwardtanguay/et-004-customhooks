import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';

const productsUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';
const ordersUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

export const PageUseFetch = () => {
	const [products, loadingProducts, numberOfProducts] = useFetch(productsUrl);
	// const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setOrders((await axios.get(ordersUrl)).data);
			})();
		}, Math.floor(Math.random() * 2000) + 1000);
	}, []);

	return (
		<>
			<p>The useFetch page.</p>
			<hr />
			{!loadingProducts ? (
				<>
					<p>There are {numberOfProducts} products.</p>
					{products.map((product: any, i: number) => {
						return (
							<span key={product.productID}>
								{product.productID}
								{numberOfProducts - 1 !== i && (
									<span>,</span>
								)}{' '}
							</span>
						);
					})}
				</>
			) : (
				<p>Loading products...</p>
			)}
			{orders.length > 0 ? (
				<>
					<p>There are {orders.length} orders.</p>
					{orders.map((order: any, i) => {
						return (
							<span key={order.orderID}>
								{order.orderID}
								{products.length - 1 !== i && (
									<span>,</span>
								)}{' '}
							</span>
						);
					})}
				</>
			) : (
				<p>Loading orders...</p>
			)}
		</>
	);
};
