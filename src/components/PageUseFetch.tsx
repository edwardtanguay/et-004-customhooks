import { useState, useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';
const ordersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

export const PageUseFetch = () => {
	const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		(async () => {
			setProducts((await axios.get(productsUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setOrders((await axios.get(ordersUrl)).data);
		})();
	}, []);

	return (
		<>
			<p>The useFetch page.</p>
			<hr/>
			<p>There are {products.length} products.</p>
			<p>There are {orders.length} orders.</p>
		</>
	);
};