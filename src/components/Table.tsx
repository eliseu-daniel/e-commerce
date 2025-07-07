import TableHead from "./TableHead";
import TableRows from "./TableRow";
import {data} from "../data/products";

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
					{data.map((item, index) => (
						<TableRows key={index} row={item} />
					))}
				</tbody>
			</table>
		</>
	);
}
