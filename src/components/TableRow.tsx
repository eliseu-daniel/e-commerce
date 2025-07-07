import { useState } from "react";
import type {Produto} from "../data/products";
import Button from "./Button";

type RowProps = {
	row: Produto;
};

export default function TableRows({ row }: RowProps) {
	const [qtd, setQtd] = useState<number>(1);

	const increment = () => {
		setQtd((prev) => prev + 1);
	}

	const decrement = () => {
		if(qtd === 1){
			return;
		}
		setQtd((prev) => prev - 1);
	}
	
	const total:number = row.quantity * row.price;
	

	return (
		<>
			<tr>
				<td>{row.order}</td>
				<td>{row.product}</td>
					<Button tipo="button" text="-" onClick={decrement}/>
					<span>{qtd}</span>
					<Button tipo="button" text="+" onClick={increment}/>
				<td>{row.price}</td>
				<td>{total}</td>
			</tr>
		</>
	);
}