import TableHead from "./TableHead";
import TableRows from "./TableRow";
import {data} from "../data/products";
import { useMemo, useState } from "react";
import Button from "./Button";

type tableProps = {
	totalGeral: (total:number) => void;
}

export default function Table({totalGeral}: tableProps) {
	// const [qtd, setQtd] = useState<number>(1);

	const [qtd, setQtd] = useState<{ [key: number]: number }>(
    	data.reduce((newObj, produto) => ({ ...newObj, [produto.order]: 1 }), {})
  	);

	const valorTotal = useMemo(() => {
			//estou rodando cada posição do array unico e armazenando o total dele
			return data.reduce((newObj, produto) => {
				return newObj + qtd[produto.order] * produto.price;
			}, 0);
		},
	// recarrega so quando a qtd for atualizada
	[qtd]);
	
	//passando o valorTotal para a prop
	useMemo(() => {
		totalGeral(valorTotal);
	},[valorTotal, totalGeral]);

	// const increment = () => {
	// 	setQtd((prev) => prev + 1);
	// }

	const increment = (order: number) => {
    setQtd((prev) => ({
      	...prev,
      [	order]: prev[order] + 1,
    	}));
  	};

	const decrement = (order: number) => {
    	setQtd((prev) => ({
      		...prev,
      		[order]: prev[order] > 1 ? prev[order] - 1 : 1,
    	}));
  	};

	// const decrement = () => {
	// 	if(qtd === 1){
	// 		return;
	// 	}
	// 	setQtd((prev) => prev - 1);
	// }
	

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
					{
						data.map((produto) => {
							const total:number = qtd[produto.order] * produto.price;
							return (
								<tr key={produto.order}>
									<TableRows row={produto.order} />
									<TableRows row={produto.product} />
									<td>
										<Button tipo="button" text="-" onClick={() => decrement(produto.order)}/>
										<span>{qtd[produto.order]}</span>
										<Button tipo="button" text="+" onClick={() => increment(produto.order)}/>
									</td>
									<TableRows row={produto.price} />
									<TableRows row={total} />
								</tr>
							);
						})
					}
					
				</tbody>
			</table>
		</>
	);
}
