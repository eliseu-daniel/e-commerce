import type {Produto} from "../data/products";

type RowProps = {
	row: Produto;
};

export default function TableRows({ row }: RowProps) {
	const total = row.quantity * row.price;
	
	return (
		<>
			<tr>
				<td>{row.order}</td>
				<td>{row.product}</td>
				<td>{row.quantity}</td>
				<td>{row.price}</td>
				<td>{total}</td>
			</tr>
		</>
	);
}
