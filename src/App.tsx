import { useState } from "react";
import Frete from "./components/Frete";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";
import Title from "./components/Title";
import {data} from "./data/products";

function App() {
	
	const [valorfrete, setValorFrete] = useState(0);

	const getTotal = () => {
		let sum = 0;
		for(let item of data){
			sum += item.price * item.quantity;
		}

		return sum;
	}
	
		const cartTotal = getTotal();
	
	return (
		<>
			<Header />
			<Title titulo="Carrinho de compras" />
			<Table />
			<Frete valor={10} setFrete = {setValorFrete}/>
			<Summary subtotal={cartTotal} frete={valorfrete}/>
		</>
	);
}

export default App;
