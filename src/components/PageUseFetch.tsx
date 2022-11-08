import { useFetch } from '../hooks/useFetch';

const productsUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';
const ordersUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

export const PageUseFetch = () => {
	const [products, loadingProducts, numberOfProducts] = useFetch(productsUrl);
	const [orders, loadingOrders, numberOfOrders] = useFetch(ordersUrl);

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
			{!loadingOrders ? (
				<>
					<p>There are {numberOfOrders} orders.</p>
					{orders.map((order: any, i) => {
						return (
							<span key={order.orderID}>
								{order.orderID}
								{numberOfOrders- 1 !== i && (
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
