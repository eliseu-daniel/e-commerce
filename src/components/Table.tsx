import TableHead from "./TableHead";
import TableRows from "./TableRow";

type Produto = {
	order: number;
	product: string;
	quantity: number;
	price: number;
};

const data: Produto[] = [
	{
		order: 1,
		product: "Memoria Ram",
		quantity: 5,
		price: 150,
	},
	{
		order: 2,
		product: "Cabo de força",
		quantity: 2,
		price: 15,
	},
];

export default function Table() {
	return (
		<>
			<table>
				<thead>
					<tr>
						<TableHead head="#" />
						<TableHead head="Produto" />
						<TableHead head="Quantidade" />
						<TableHead head="Preço" />
						<TableHead head="Total" />
					</tr>
				</thead>
				<tbody>
					{data.map((produto) => {
						const total = produto.quantity * produto.price;
						return (
							<tr key={produto.order}>
								<TableRows row={produto.order} />
								<TableRows row={produto.product} />
								<TableRows row={produto.quantity} />
								<TableRows row={produto.price} />
								<TableRows row={total} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
