import { useState, useEffect } from 'react';
import axios from 'axios';

const productsUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';
const ordersUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

export const PageUseFetch = () => {
	const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setProducts((await axios.get(productsUrl)).data);
			})();
		}, Math.floor(Math.random() * 2000) + 1000);
	}, []);

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
			{products.length > 0 ? (
				<p>There are {products.length} products.</p>
			) : (
				<p>Loading products...</p>
			)}
			{orders.length > 0 ? (
				<p>There are {orders.length} orders.</p>
			) : (
				<p>Loading orders...</p>
			)}
		</>
	);
};
